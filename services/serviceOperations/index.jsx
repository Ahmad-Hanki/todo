import prisma from "@/lib/prisma";

// GET ALL
export async function getAllData() {
  try {
    const data = await prisma.todo.findMany();
    return data;
  } catch (error) {
    return { error: error.message };
  }
}

// POST
export async function createNewData(newData) {
  try {
    const data = await prisma.todo.create({ data: newData });
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
// Update
export async function updateDataByAny(id, updatedFields) {
  try {
    const data = await prisma.todo.update({
      where: { id },
      data: updatedFields,
    });
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
//DELETE
export async function deleteDataByAny(id) {
  try {
    const data = await prisma.todo.delete({ where: {id} });
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
