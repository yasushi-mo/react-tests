type AuthState =
  | { status: "unauthenticated" }
  | { status: "authenticating" }
  | { status: "authenticated"; user: { id: string; name: string } }
  | { status: "error"; message: string };

export function displayAuthMessage(state: AuthState): string {
  switch (state.status) {
    case "unauthenticated":
      return "You are not logged in.";

    case "authenticating":
      return "Logging in... Please wait.";

    case "authenticated":
      return `Welcome back, ${state.user.name}!`;

    case "error":
      return `Authentication failed: ${state.message}`;

    default: {
      // Exhaustiveness check
      const _exhaustive: never = state;
      throw new Error(`Unhandled state: ${_exhaustive}`);
    }
  }
}
