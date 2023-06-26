export class ApiError extends Error {
  status: number;
  constructor(url:string,status:number) {
    super(`${url} returned ${status}`);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    this.name = "ApiError";
    // Custom debugging information
    this.status = status;
  }
}


export async function fetchJson(url:string,options?:RequestInit):Promise<any> {
  const response = await fetch(url,options);
  if (!response.ok) {
    throw new ApiError(url,response.status);
  }
  return await response.json();
}
