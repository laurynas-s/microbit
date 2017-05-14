module.exports = {
  parent: folder => {
      let parts = folder.split('/');
      let next = parts.splice(0, parts.length-1);
      let parent = next.join('/');
      return parent;
  }
};