import TodoList from '@/components/TodoList';
import TodoFilters from '@/components/TodoFilters';
import PageTransition from '@/components/PageTransition';
import { Suspense } from 'react';

export default function TodosPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-600">
          ToDo List
        </h1>
        
        <Suspense fallback={<div className="text-center">Loading filters...</div>}>
          <TodoFilters />
        </Suspense>

        <Suspense fallback={<div className="text-center mt-8">Loading todos...</div>}>
          <TodoList />
        </Suspense>
      </div>
    </PageTransition>
  );
}