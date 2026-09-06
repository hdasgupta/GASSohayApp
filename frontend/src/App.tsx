import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState<any[][]>([]);

  useEffect(() => {
    if (typeof google !== 'undefined' && google.script) {
      google.script.run
        .withSuccessHandler((result: any[][]) => {
          alert(result)
          setData(result);
        })
        .withFailureHandler((err: Error) => {
          alert(err.message);
        })
        .getSheetData();
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sheet Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
