export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  duration?: number;
}

export const notifications = {
  // Auth Notifications
  auth: {
    loginSuccess: {
      id: "auth-login-success",
      type: "success",
      title: "Login Successful",
      message: "Welcome back! You have successfully logged in.",
      duration: 3000,
    },
    loginError: {
      id: "auth-login-error",
      type: "error",
      title: "Login Failed",
      message: "Invalid credentials. Please try again.",
      duration: 5000,
    },
    logoutSuccess: {
      id: "auth-logout-success",
      type: "success",
      title: "Logged Out",
      message: "You have been successfully logged out.",
      duration: 3000,
    },
  },

  // User Management Notifications
  users: {
    createSuccess: {
      id: "user-create-success",
      type: "success",
      title: "User Created",
      message: "User has been successfully created.",
      duration: 3000,
    },
    updateSuccess: {
      id: "user-update-success",
      type: "success",
      title: "User Updated",
      message: "User information has been successfully updated.",
      duration: 3000,
    },
    deleteSuccess: {
      id: "user-delete-success",
      type: "success",
      title: "User Deleted",
      message: "User has been successfully deleted.",
      duration: 3000,
    },
    error: {
      id: "user-error",
      type: "error",
      title: "Operation Failed",
      message: "An error occurred while processing your request.",
      duration: 5000,
    },
  },

  // Settings Notifications
  settings: {
    updateSuccess: {
      id: "settings-update-success",
      type: "success",
      title: "Settings Updated",
      message: "Your settings have been successfully updated.",
      duration: 3000,
    },
    updateError: {
      id: "settings-update-error",
      type: "error",
      title: "Update Failed",
      message: "Failed to update settings. Please try again.",
      duration: 5000,
    },
  },

  // General Notifications
  general: {
    error: {
      id: "general-error",
      type: "error",
      title: "Error",
      message: "An unexpected error occurred. Please try again.",
      duration: 5000,
    },
    warning: {
      id: "general-warning",
      type: "warning",
      title: "Warning",
      message: "Please review your input and try again.",
      duration: 4000,
    },
    info: {
      id: "general-info",
      type: "info",
      title: "Information",
      message: "This action requires your attention.",
      duration: 4000,
    },
  },
} as const;
