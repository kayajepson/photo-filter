class TagSuggestor {
  constructor(tagLists) {
    this.tagSets = tagLists.map(l => new Set(l));
  }

  suggestTags(tags, threshold = 0.8) {
    const suggestTags = [];
    for (const tagSet of this.tagSets) {
      const setSize = tagSet.size;
      let numContained = 0;
      const setDiff = [];
      for (const tag of tags) {
        if (tagSet.has(tag)) {
          ++numContained;
        } else {
          setDiff.push(tag);
        }
      }
      if (numContained/setSize >= threshold) {
        suggestTags.push(...setDiff);
      }
    }
    return [...new Set(suggestTags)];
  }
}

export default TagSuggestor;
