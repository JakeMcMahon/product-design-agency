import React from "react";
import { Button } from "@/components/ui-agency/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui-agency/card";
import { Badge } from "@/components/ui-agency/badge";

export const TestComponent = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Component Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
            <CardDescription>This is a test card using the new agency components</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This card uses the new UI components from the product-analytics-agency project.</p>
            <Button>Primary Button</Button>
            <Button variant="secondary" className="ml-2">Secondary Button</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Badge Test</CardTitle>
            <CardDescription>Testing different badge variants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};