class TagSuggestor {
  constructor(tagLists) {
    console.log("initial", tagLists);
    this.tagSets = tagLists.map(l => new Set(l));
    console.log("sets", this.tagSets);
  }

  suggestTags(tags, threshold = 0.8) {
    const suggestTags = [];
    //for each set of tags
    for (const tagSet of this.tagSets) {
      const setSize = tagSet.setSize;
      let numContained = 0;
      const setDiff = [];
      //look at each tag
      for (const tag of tags) {
        //if it's in the set already, increase numContained
        if (tagSet.has(tag)) {
            console.log("tag", tag)
          ++numContained;
        } else {
          //otherwise it is unique, hold it in setDiff
          console.log("diff", tag)
          setDiff.push(tag);
        }
      }
      //if we have a big enough set, push them into suggestTags
      if (numContained/setSize >= threshold) {
        console.log("here")
        suggestTags.push(...setDiff);
      }
    }
    //dedupe before returning
    return [...new Set(suggestTags)];
  }
}

export default TagSuggestor;
