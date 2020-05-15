(function () {
  // let $fors

  const renderFor = ($for) => {
    console.log($for)
  }

  const renderFors = ($fors) =>
  {
    for(let i=0; i<$fors.length; i++)
      renderFor($($fors[i]))
  }

  const main = () => {
    $fors = $(".jgaFor")
    console.log(typeof $fors)

    renderFors($fors)
  }

  $(main)
})()
