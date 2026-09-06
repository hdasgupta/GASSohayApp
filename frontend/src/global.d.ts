declare namespace google.script {
  interface Run {
    withSuccessHandler(onSuccess: (result: any) => void): Run;
    withFailureHandler(onFailure: (error: Error) => void): Run;
    [key: string]: any;
  }
  const run: Run;
}
