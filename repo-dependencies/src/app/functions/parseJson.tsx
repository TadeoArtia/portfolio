interface GraphNode {
    id: string;
    name: string;
    type: 'package' | 'dependency' | 'devDependency';
    version?: string;
}

interface GraphLink {
    source: string;
    target: string;
    type: 'dependency' | 'devDependency';
}

interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
}

export const parseJson = (json: string): GraphData => {
    try {
        const packageData = JSON.parse(json);

        const nodes: GraphNode[] = [];
        const links: GraphLink[] = [];

        // Add the main package as the root node
        const rootPackage = {
            id: packageData.name || 'root',
            name: packageData.name || 'Root Package',
            type: 'package' as const,
            version: packageData.version
        };
        nodes.push(rootPackage);

        // Process dependencies
        if (packageData.dependencies) {
            Object.entries(packageData.dependencies).forEach(([depName, version]) => {
                const dependencyNode: GraphNode = {
                    id: depName,
                    name: depName,
                    type: 'dependency',
                    version: version as string
                };

                nodes.push(dependencyNode);

                // Create link from root package to dependency
                links.push({
                    source: rootPackage.id,
                    target: depName,
                    type: 'dependency'
                });
            });
        }

        // Process devDependencies
        if (packageData.devDependencies) {
            Object.entries(packageData.devDependencies).forEach(([depName, version]) => {
                // Check if this dependency already exists as a regular dependency
                const existingNode = nodes.find(node => node.id === depName);

                if (!existingNode) {
                    const devDependencyNode: GraphNode = {
                        id: depName,
                        name: depName,
                        type: 'devDependency',
                        version: version as string
                    };

                    nodes.push(devDependencyNode);
                }

                // Create link from root package to dev dependency
                links.push({
                    source: rootPackage.id,
                    target: depName,
                    type: 'devDependency'
                });
            });
        }

        return {
            nodes,
            links
        };

    } catch (error) {
        throw new Error('Failed to parse JSON: ' + (error as Error).message);
    }
};