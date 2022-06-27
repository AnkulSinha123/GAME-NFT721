const CONTRACT_ADDRESS = '0xB25a00b682a89A9C2E912191d9165F135148B866';
const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};


export { CONTRACT_ADDRESS, transformCharacterData };