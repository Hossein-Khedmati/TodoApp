'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function TodoFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialUserId = searchParams?.get('userId') || '';
  const initialCompleted = searchParams?.get('completed') || '';
  
  const [userId, setUserId] = useState(initialUserId);
  const [completed, setCompleted] = useState(initialCompleted);

  useEffect(() => {
    const params = new URLSearchParams();
    if (userId) params.set('userId', userId);
    if (completed) params.set('completed', completed);
    
    router.push(`/todos?${params.toString()}`);
  }, [userId, completed, router]);

  return (
    <div className="bg-purple-300 p-4 rounded-lg shadow-md mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by User ID
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md"
            placeholder="Enter user ID (1-10)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Completion
          </label>
          <select
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md"
          >
            <option value="">All</option>
            <option value="true">Completed</option>
            <option value="false">Not Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}