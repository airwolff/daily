function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // dataset.potato will return what is in the html for data-potato eg data-potato="px" (-potato can be anything). for above '' is for nothing so we don't get undefined
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // this.name and this.value returns name="potato" and value attribute from html
  console.log(this.dataset);
}
