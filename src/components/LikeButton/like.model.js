function LikeModel(id, nome, isLike) {
    this.id = id;
    this.nome = nome;
    this.isLike = isLike;
  
    return {
      id,
      nome,
      isLike
    };
  }
  
  export default LikeModel;
  