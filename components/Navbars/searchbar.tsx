"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

interface SearchBarProps {
  suggestions: { label: string; link: string }[];
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ suggestions, onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    { label: string; link: string }[]
  >([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const suggestionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    // Filter suggestions based on the query
    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }

    // Call the onSearch callback to notify parent of the current query
    onSearch(value);
    setSelectedIndex(-1); // Reset selected index on input change
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredSuggestions.length === 0) return;

    if (event.key === "ArrowDown") {
      // Move down in the suggestions list
      setSelectedIndex((prevIndex) =>
        prevIndex === filteredSuggestions.length - 1 ? prevIndex : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      // Move up in the suggestions list
      setSelectedIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    } else if (event.key === "Enter") {
      // Select the highlighted suggestion
      if (selectedIndex >= 0 && selectedIndex < filteredSuggestions.length) {
        const selectedSuggestion = filteredSuggestions[selectedIndex];
        window.location.href = selectedSuggestion.link; // Navigate to the selected suggestion
      }
    }
  };

  // Scroll the selected item into view
  React.useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white dark:bg-neutral-800 border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              ref={(el) => {
                suggestionRefs.current[index] = el;
              }} // Save reference to each suggestion
              className={`p-2 hover:bg-gray-100 dark:hover:bg-neutral-700 ${
                selectedIndex === index
                  ? "bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
                  : ""
              }`}
            >
              <Link href={suggestion.link}>
                <p className="block">{suggestion.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
