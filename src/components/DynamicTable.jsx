import React from "react";
import { snakeCaseToTitle } from "../utils/helperFunctions";

const DynamicTable = ({ columns, data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <span>{snakeCaseToTitle(col)}</span>
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60"></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((item) => (
              <tr
                key={item.id}
                className="transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 group"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={col}
                    className="px-8 py-6 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      {colIndex === 0 && (
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      )}
                      <span className="font-medium">{item[col] || "N/A"}</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No data found
          </h3>
          <p className="text-gray-500">There are no records to display.</p>
        </div>
      )}
    </div>
  );
};

export default DynamicTable;
