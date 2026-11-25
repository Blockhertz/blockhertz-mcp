const BASE_URL = "https://blockhertz.com";

export async function blockhertzFetch(
  path: string,
  body: unknown
): Promise<unknown> {
  const apiKey = process.env.BLOCKHERTZ_API_KEY;
  if (!apiKey) {
    throw new Error(
      "BLOCKHERTZ_API_KEY is not set. Get your key at https://blockhertz.com/dashboard"
    );
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    let message = `Request failed with status ${res.status}`;
    let upgradeUrl: string | undefined;
    try {
      const data = (await res.json()) as {
        message?: string;
        upgrade_url?: string;
      };
      if (data?.message) message = data.message;
      if (data?.upgrade_url) upgradeUrl = data.upgrade_url;
    } catch {
      // response body not JSON; keep default message
    }

    switch (res.status) {
      case 401:
        throw new Error(`Invalid API key: ${message}`);
      case 402:
        throw new Error(
          `No credits remaining: ${message}${
            upgradeUrl ? ` — Upgrade: ${upgradeUrl}` : ""
          }`
        );
      case 429:
        throw new Error(`Rate limit exceeded: ${message}`);
      case 500:
        throw new Error(`Server error: ${message}`);
      default:
        throw new Error(
          `${message}${upgradeUrl ? ` — Upgrade: ${upgradeUrl}` : ""}`
        );
    }
  }

  return res.json();
}
