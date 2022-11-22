import React, { useEffect, useState } from "react";

function getSavedValue(key, value) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return value;
}

//Custom Hook for saving the data in local storage
function useLocalStoirage(key, value) {
  const [updatedValue, setUpdatedValue] = useState(() => {
    return getSavedValue(key, value);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(updatedValue));
  }, [updatedValue]);

  return [updatedValue, setUpdatedValue];
}

export default useLocalStoirage;
