"use client"

import React from "react";
import {WorkingExperiences} from "@/utils/static-datasource/WorkingExperiences";

const JobTimelineComponent: React.FC = () => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {WorkingExperiences.map((experience) => (
                <li key={experience.job_id} className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {experience.job_period}
                    </time>
                    <h1 className="text-black font-bold">
                        {experience.job_title} - <span className="font-light">{experience.job_type}</span>
                    </h1>
                    <h5 className="mb-1 text-lg font-medium text-gray-600">
                        {experience.job_company}
                    </h5>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {experience.job_description}
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        Learn more
                        <svg
                            className="w-3 h-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </li>
            ))}
        </ol>


    );
}

export default JobTimelineComponent;
