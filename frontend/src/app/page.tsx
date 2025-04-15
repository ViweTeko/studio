import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Athletes</CardTitle>
          <CardDescription>Manage athlete profiles.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder content - replace with actual athlete list or stats */}
          Click on the Athletes link to manage them.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Races</CardTitle>
          <CardDescription>Record race details and performance.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder content - replace with actual race list or stats */}
          Click on the Races link to manage them.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
          <CardDescription>View athlete rankings based on race performance.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder content - replace with actual leaderboard */}
          Click on the Leaderboard link to view it.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Performance Analysis</CardTitle>
          <CardDescription>Get insights and predictions for training adjustments.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder content - replace with actual AI analysis */}
          Click on the AI link to perform analysis.
        </CardContent>
      </Card>
    </div>
  );
}

