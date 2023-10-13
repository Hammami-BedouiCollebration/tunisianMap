function changeImage(img) {
  var mainImage = $(".mainImg")
  var mainText = $(".mainText")

  mainImage.attr("src", img.src)

  switch (img.alt) {
    case "img 1":
      mainText.text(
        "Tourism in Tunisia is an industry that generates around 9.4 million  it one of the most visited countries in Africa. Tunisia has been an attractive destination for tourists since the beginning of the 1960s."
      );
      break
    case "img 2":
      mainText.text(
        "Tunisia is also an attractive destination for its huge number of important festivals. The majority of these festivals occur in summer such as International Festival of Carthage which is the most important festival in the Arab world hosting stars and bands from all over the world."
      );
      break
    case "img 3":
      mainText.text(
        "Until recently, Tunisia's main attraction was on its northeast coastline around Tunis; however, the Seventh National Development Plan of 1989 created several new tourist areas including the resort at Port-el-Kantaoui.[2] The tourism sector now represents 6.5% of Tunisia's GDP and provides 340,000 jobs of which 85,000 are direct jobs or 11.5% of the working population with a high share of seasonal employment."
      )
  }
}
