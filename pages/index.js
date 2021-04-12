import Card from "../components/Card";
import Button from "../components/Button";
import { data, tagsToImages } from "../utils/data.js";
import { useState, useEffect } from "react";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function Home() {
  const [images, setImages] = useState(data);
  const [tags, setTags] = useState(Object.keys(tagsToImages));
  const [multiTag, setMultiTag] = useState([]);
  let filteredImages = [];

  useEffect(() => {
    if (multiTag.length === 0) {
      setImages(data);
    } else {
      for (let el of multiTag) {
        filteredImages.push(tagsToImages[el]);
      }
      setImages([...new Set(filteredImages.flat())]);
    }
  }, [multiTag]);

  function setMultipleTags(text) {
    setMultiTag([...multiTag, text]);
  }

  function suggestions(){
    if(multiTag.length) {
      
    }
  }

  function clear() {
    setImages(data);
    setMultiTag([]);
  }

  return (
    <>
    <div className="grid grid-cols-12 w-full">
      <div className="col-start-2 col-end-3">
        <div className="grid grid-cols-1">
        <button
            className="py-2 px-4 mt-4 bg-green-400 text-white rounded-md max-w-max hover:bg-opacity-75"
            onClick={() => clear()}
          >
            Clear
          </button>

          {tags.map((a) => (
            <Button key={a} onClick={() => setMultipleTags(a)}>
              {a}
            </Button>
          ))}

        </div>
      </div>
      <div className="col-start-3 col-end-12">
        <div className="grid grid-cols-3 gap-3 justify-items-center w-full mt-4">
          {shuffle(images).map((a, i) => (
            <Card key={i} image={a.imageUrl} />
          ))}
          {/* {images.map((a, i) => (
          <Card key={i} image={a.imageUrl} />
        ))} */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
