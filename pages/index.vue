<template>
  <div class="px-2 md:px-4 lg:px-8 py-10">
    <h1 class="text-2xl pb-6">Bocconi Online Test Practice</h1>

    <div class="flex flex-col gap-10">
      <div :key="question.uuid" v-for="(question, index) in questions">
        <h2 class="text-lg mb-5 text-center border-b border-slate-200">Question {{ index + 1 }}</h2>
        <FormQuestion :question="question" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({title: 'Bocconi Online Test Practice'});

const questions: Question[] = [
  {
    uuid: "d587ab76-a2a1-4d6c-83ee-4ae472d77f3d",
    area: "Mathematics",
    figure: {
      image_src: "/images/question-1.png"
    },
    text: "You can see the graph of the function f(x) above. How many real solutions satisfies the equation |f(x)|=10?",
    answers: [
      {
        uuid: "8348b0c8-73cf-4bc8-a550-5129d6b1815a",
        text: "0"
      },
      {
        uuid: "2e6a8347-1e48-4dbb-a902-72a6053b7fce",
        text: "1"
      },
      {
        uuid: "d7e402cf-fadf-434a-8b9a-261d1c98c24d",
        text: "2",
        correct: true
      },
      {
        uuid: "109c7bbf-0452-4093-8c63-8ad7b8563a00",
        text: "3"
      },
      {
        uuid: "8395e5be-8b6f-41d3-a8a1-9e246c994813",
        text: "Cannot be known"
      }
    ]
  },
  {
    uuid: "89cb1e2f-7b3f-494f-9c77-55673e927077",
    area: "Mathematics",
    text: "If point (1,0) is the vertex of a parabola with equation y = ax2 + bx + c which passes through point (0,1), then the parabola passes also through point:",
    answers: [
      {
        uuid: "d036f28b-8544-45ae-b846-7c781b54b715",
        text: "(2,2)"
      },
      {
        uuid: "476b570b-51fa-4264-9243-72f1f0468129",
        text: "(2,3)"
      },
      {
        uuid: "f1fcc094-bdb5-42fc-864c-5c9f5e431add",
        text: "(3,2)",
        correct: true
      },
      {
        uuid: "6873ff0a-7a5a-4a62-ad62-e4da88bdfa4c",
        text: "(3,3)"
      },
      {
        uuid: "71b5caab-4e2c-4086-98b9-c3dfded98c58",
        text: "(3,4)"
      }
    ]
  },
  {
    uuid: "8dafda17-15e0-45c2-b2bc-ebd9200be8ee",
    area: "Logical Reasoning",
    text: "During a target-shooting competition, Antonio hit 51 targets out of 60. Which percentage of targets did he hit?",
    answers: [
      {
        uuid: "552be00e-e476-459b-94b5-2577127cfdcc",
        text: "95%"
      },
      {
        uuid: "56b04007-edac-4c71-a4ad-b6da03f82917",
        text: "90%"
      },
      {
        uuid: "d14a126d-f396-4e41-b99c-93c291c7dbe6",
        text: "80%"
      },
      {
        uuid: "923a80b8-b9f1-46d1-a542-53e2372d5962",
        text: "85%",
        correct: true
      },
      {
        uuid: "3b172ce7-fa6f-47c7-8f0e-f98fbe291334",
        text: "70%"
      }
    ]
  },
  {
    uuid: "b2974061-4771-4ebc-abb8-a69a5b083bef",
    area: "Text Comprehension",
    figure: {
      "text": "World Wide, the technical potential to increase energy efficiency is considerable; in the next two or three decades, saving between 10 and 30% could be done at a negative cost - i.e. with an economical benefit of the investors all around the world (including areas where Italian companies do operate) – simply by intervening on energy conservation and handling the demand."
    },
    text: "By “negative cost” they mean:",
    answers: [
      {
        uuid: "d24079f7-b5cf-4a8d-a846-390f4461da3b",
        text: "an unprofitable investment"
      },
      {
        uuid: "c2d01252-6299-42bb-b2ce-d8ab00acc241",
        text: "a benefit for the investor"
      },
      {
        uuid: "08a4e7f0-f6c0-448b-b368-b434c27920de",
        text: "the cost which environment will suffer because of a certain activity"
      },
      {
        uuid: "c4562da4-f9d2-4f9d-a5fe-53182926a662",
        text: "the cost which the community will suffer because of a certain activity"
      },
      {
        uuid: "9d5270f1-0189-40cf-926e-509853681bfe",
        text: "the deficit of a country"
      }
    ]
  },
  {
    uuid: "46c40ed4-83a9-4690-8d1e-dcd96480e3de",
    area: "Mathematics",
    text: "A given population decreases by 20% every year. What is the approximate percentage left after 5 years?",
    answers: [
      {
        uuid: "47a7c8cc-23b1-40d4-a4ab-1ba79a1b0f05",
        text: "0%"
      },
      {
        uuid: "98da2573-6471-4ad5-93c6-80198c50fc82",
        text: "10%"
      },
      {
        uuid: "0178f253-e7f4-4934-b1e2-50e6d4a6d37c",
        text: "20%"
      },
      {
        uuid: "3cc7a553-211a-4248-81c0-ba9304fb4d53",
        text: "30%",
        correct: true
      },
      {
        uuid: "747a9e7c-1082-4921-b305-922c3e9ebde1",
        text: "50%"
      }
    ]
  },
  {
    uuid: "9b4f2399-6b19-4e5b-95df-200ee144d9dc",
    area: "Numerical Reasoning",
    figure: {
      legend: "Number of cars sold in Italy (2019) in thousands",
      data: [
        ["Country of origin", "MPV", "Family", "Utility", "Saloon", "4x4", "Coupé", "SUV"],
        ["Italy", "62", "48", "86", "56", "15", "17", "10"],
        ["France", "45", "52", "68", "63", "8", "19", "4"],
        ["Germany", "32", "43", "56", "52", "6", "3", "9"],
        ["USA", "36", "28", "18", "11", "32", "19", "6"],
        ["Japan", "27", "15", "75", "53", "6", "8", "48"],
        ["China", "14", "11", "15", "22", "3", "5", "18"]
      ]
    },
    text: "Italian marques outdid French marques for how many car types sold in Italy in 2019?",
    answers: [
      {
        uuid: "ddc02f03-d68a-46e7-878a-2690c74698ba",
        text: "2"
      },
      {
        uuid: "32f2457a-a312-4edc-903e-d9f35f6c7e02",
        text: "3"
      },
      {
        uuid: "951d0945-055c-411a-928f-8729cef541bf",
        text: "4"
      },
      {
        uuid: "bd870401-c4b6-426e-90a9-3f63c490ea64",
        text: "5"
      },
      {
        uuid: "b18753ab-62a5-487e-9c34-801cd7f92c33",
        text: "It is not possible to answer on the basis of the data provided"
      }
    ]
  }
]
</script>
