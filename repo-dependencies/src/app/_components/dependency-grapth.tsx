
"use client";

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Dynamic import to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false
});

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

interface DependencyGraphProps {
    data: GraphData;
}

export default function DependencyGraph({ data }: DependencyGraphProps) {
    const graphData = useMemo(() => {
        return {
            nodes: data.nodes.map(node => ({
                ...node,
                color: node.type === 'package'
                    ? '#3b82f6' // Blue for main package
                    : node.type === 'dependency'
                        ? '#10b981' // Green for dependencies
                        : '#f59e0b' // Yellow for dev dependencies
            })),
            links: data.links.map(link => ({
                ...link,
                color: link.type === 'dependency' ? '#10b981' : '#f59e0b'
            }))
        };
    }, [data]);

    return (
        <div className="w-full h-96 border rounded-lg bg-white">
            <ForceGraph2D
                graphData={graphData}
                nodeLabel={(node: any) => `${node.name}\n${node.version || ''}`}
                nodeColor={(node: any) => node.color}
                linkColor={(link: any) => link.color}
                nodeRelSize={6}
                linkWidth={2}
                linkDirectionalArrowLength={3}
                linkDirectionalArrowRelPos={1}
                width={800}
                height={400}
                enablePanInteraction={true}
                enableZoomInteraction={true}
            />
        </div>
    );
}