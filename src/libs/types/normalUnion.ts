type AuthState = {
  status: string;
  user?: { id: string; name: string };
  message?: string;
};

export function displayAuthMessage(state: AuthState): string {
  if (state.status === "unauthenticated") {
    return "You are not logged in.";
  }

  if (state.status === "authenticating") {
    return "Logging in... Please wait.";
  }

  if (state.status === "authenticated") {
    if (state.user) {
      return `Welcome back, ${state.user.name}!`;
    }
    return "Error: Missing user information.";
  }

  if (state.status === "error") {
    if (state.message) {
      return `Authentication failed: ${state.message}`;
    }
    return "Error: An unknown error occurred.";
  }

  // No exhaustive type checking
  return "Unknown state.";
}
