// 구조 분해 할당(destrucring assignment)

const {
  localStorage: storage,
  JSON: { stringify: serialize, parse: deserialize },
} = globalThis;

// localStorage 역할
// 개인화(personalization)

export const saveStorage = (key, value) => {
  if (typeof key === 'string') {
    storage.setItem(key, serialize(value));
  }
};

export const loadStorage = (key) => {
  if (typeof key === 'string') {
    return deserialize(storage.getItem(key));
  }
};

export const deleteStorage = (key) => {
  if (!key) {
    storage.clear();
  } else {
    storage.removeItem(key);
  }
};
