'use client';

import React from 'react';
import { Button } from "@/components/ui/button"; // Assuming you have the button component from ShadCN
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // ShadCN Card components

const Home: React.FC = () => {
  return (
    <div className="mr-5 ml-5 flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Welcome to the Quiz Application</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <Button asChild className="mt-6 w-full bg-blue-500 hover:bg-blue-600">
            <a href="/quiz" className="w-full py-2 text-white">
              Start Quiz
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
