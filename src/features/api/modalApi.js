class modalApi {
  async fetchAll() {
    const response = await fetch('http://localhost:4040/modal_items');
    const data = await response.json();
    return data;
  }
  // TODO
  async fetchModalById(id) {
    const response = await fetch('http://localhost:4040/modal_items' + id);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  }
}

export default new modalApi();
