"use client";

import React, { useRef, useState } from "react";
import { api } from "~/trpc/react";
import { parseJson } from "./functions/parseJson";
import DependencyGraph from "~/app/_components/dependency-grapth";

export default function UploadPage() {
	const [file, setFile] = useState<File | null>(null);
	const [isDragOver, setIsDragOver] = useState(false);
	const [uploadStatus, setUploadStatus] = useState<
		"idle" | "uploading" | "success" | "error"
	>("idle");
	const [errorMessage, setErrorMessage] = useState("");
	const [graphData, setGraphData] = useState<any>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);


	const handleFileSelect = (selectedFile: File) => {
		if (
			selectedFile.type === "application/json" ||
			selectedFile.name.endsWith(".json")
		) {
			setFile(selectedFile);
			setUploadStatus("idle");
			setErrorMessage("");
		} else {
			setErrorMessage("Please select a valid JSON file");
			setUploadStatus("error");
		}
	};


	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);

		const droppedFile = e.dataTransfer.files[0];
		if (droppedFile) {
			handleFileSelect(droppedFile);
		}
	};


	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	const handleDragLeave = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);
	};

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			handleFileSelect(selectedFile);
		}
	};

	const resetUpload = () => {
		setFile(null);
		setUploadStatus("idle");
		setErrorMessage("");
		setGraphData(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};




	const handleUpload = async () => {
		if (!file) return;

		try {
			setUploadStatus("uploading");

			console.log("file", file);
			// Read file content
			const text = await file.text();
			const chartData = parseJson(text)
			console.log("chartData", chartData);
			setUploadStatus("success");
			setGraphData(chartData);
			setErrorMessage("");
		} catch (error) {
			setUploadStatus("error");
			setErrorMessage("Failed to upload file");
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<div className="mb-8 text-center">
					<h1 className="mb-2 font-bold text-3xl text-gray-900">
						Package Dependency Visualizer
					</h1>
					<p className="text-gray-600">Upload a package.json file to visualize dependencies</p>
				</div>

				{/* Upload Section */}
				<div className="rounded-lg bg-white p-6 shadow-md mb-8">
					<div
						className={`rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
							isDragOver
								? "border-blue-400 bg-blue-50"
								: uploadStatus === "error"
									? "border-red-400 bg-red-50"
									: "border-gray-300 hover:border-gray-400"
						}`}
						onDrop={handleDrop}
						onDragOver={handleDragOver}
						onDragLeave={handleDragLeave}
					>
						<svg
							className="mx-auto mb-4 h-12 w-12 text-gray-400"
							stroke="currentColor"
							fill="none"
							viewBox="0 0 48 48"
						>
							<title>Upload</title>
							<path
								d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>

						{file ? (
							<div className="text-gray-600 text-sm">
								<p className="font-medium text-gray-900">{file.name}</p>
								<p>{(file.size / 1024).toFixed(1)} KB</p>
							</div>
						) : (
							<>
								<p className="mb-2 text-gray-600">
									Drop your JSON file here, or
								</p>
								<button
									type="button"
									onClick={() => fileInputRef.current?.click()}
									className="font-medium text-blue-600 hover:text-blue-500"
								>
									browse to choose a file
								</button>
							</>
						)}

						<input
							ref={fileInputRef}
							type="file"
							accept=".json,application/json"
							onChange={handleFileInputChange}
							className="hidden"
						/>
					</div>

					{/* ... (keep your existing upload UI) */}

					{/*/!* Success Message with Stats *!/*/}
					{/*{uploadStatus === "success" && (*/}
					{/*	<div className="mt-4 rounded border border-green-400 bg-green-100 p-3 text-green-700">*/}
					{/*		<p className="font-medium">{addJsonMutation.data.message}</p>*/}
					{/*		<div className="text-sm mt-2 grid grid-cols-2 gap-4">*/}
					{/*			<p>Total Packages: {addJsonMutation.data.stats.totalNodes}</p>*/}
					{/*			<p>Total Connections: {addJsonMutation.data.stats.totalLinks}</p>*/}
					{/*			<p>Dependencies: {addJsonMutation.data.stats.dependencies}</p>*/}
					{/*			<p>Dev Dependencies: {addJsonMutation.data.stats.devDependencies}</p>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*)}*/}

				</div>

				{/* Action Buttons - THIS WAS MISSING */}
				<div className="mt-6 flex gap-3">
					{file && uploadStatus !== "success" && (
						<button
							type="button"
							onClick={handleUpload}
							disabled={uploadStatus === "uploading"}
							className="flex-1 rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
						>
							{uploadStatus === "uploading" ? "Processing..." : "Process File"}
						</button>
					)}

					{file && (
						<button
							type="button"
							onClick={resetUpload}
							disabled={uploadStatus === "uploading"}
							className="flex-1 rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
						>
							{uploadStatus === "success" ? "Upload Another" : "Clear"}
						</button>
					)}
				</div>


			{/* Graph Section */}
				{graphData && uploadStatus === "success" && (
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h2 className="text-xl font-semibold mb-4 text-gray-900">
							Dependency Graph
						</h2>
						<div className="flex justify-center">
							<DependencyGraph data={graphData} />
						</div>
						<div className="mt-4 text-sm text-gray-600">
							<p className="flex items-center gap-2">
								<span className="w-3 h-3 bg-blue-500 rounded-full"></span>
								Main Package
								<span className="w-3 h-3 bg-green-500 rounded-full ml-4"></span>
								Dependencies
								<span className="w-3 h-3 bg-yellow-500 rounded-full ml-4"></span>
								Dev Dependencies
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}