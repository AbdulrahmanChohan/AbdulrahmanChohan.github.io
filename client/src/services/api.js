const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// Projects API
export const projectsAPI = {
  // Get all projects
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  // Get featured projects
  getFeatured: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/featured`);
      if (!response.ok) {
        throw new Error('Failed to fetch featured projects');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      return [];
    }
  },

  // Get single project
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch project');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching project:', error);
      return null;
    }
  }
};

// Contact API
export const contactAPI = {
  // Send contact message
  sendMessage: async (contactData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
};
