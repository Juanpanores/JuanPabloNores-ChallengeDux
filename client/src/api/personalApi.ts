const API_URL = "https://staging.duxsoftware.com.ar/api/personal";

// Fetch all personal records
export async function getAllPersonal() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch personal records");
  }
  return response.json();
}

// Fetch a single personal record by ID
export async function getPersonalById(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch personal record with ID: ${id}`);
  }
  return response.json();
}

// Create a new personal record
export async function createPersonal(data: object) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create personal record");
  }
  return response.json();
}

// Update an existing personal record by ID
export async function updatePersonal(id: string, data: object) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Failed to update personal record with ID: ${id}`);
  }
  return response.json();
}

// Delete a personal record by ID
export async function deletePersonal(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete personal record with ID: ${id}`);
  }
  return response.json();
}
