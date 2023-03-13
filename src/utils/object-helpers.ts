export const updateObjectInArray = <T extends { id: string }>(items: T[], itemId: string, newObjProps: object): T[] => {
  return items.map((item) => (item.id === itemId ? { ...item, ...newObjProps } : item))
}
