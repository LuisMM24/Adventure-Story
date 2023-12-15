import React from "react";
import LevelCategoryEllipseSVG from "@/assets/images/ellipse-big.svg";
import BuildSVG from "@/assets/images/level-types/build.svg";
import QuestionSVG from "@/assets/images/level-types/question.svg";
import BookSVG from "@/assets/images/level-types/book.svg";

export enum LevelCategoryEnum {
  Build = "build",
  Question = "question",
  Book = "book",
}

const categories: {
  [key in LevelCategoryEnum]: { ellipseColor: string; icon: any };
} = {
  build: {
    ellipseColor: "#67EB00",
    icon: BuildSVG,
  },
  question: {
    ellipseColor: "#A17CFF",
    icon: QuestionSVG,
  },
  book: {
    ellipseColor: "#4CB8E6",
    icon: BookSVG,
  },
};

type Props = {
  type: LevelCategoryEnum;
};

export const LevelCategory = (props: Props) => {
  const selectedCategory = categories[props.type];

  return (
    <div className="relative">
      <LevelCategoryEllipseSVG color={selectedCategory.ellipseColor} />
      <selectedCategory.icon className="absolute left-1/2 top-2 -translate-x-1/2 transform" />
    </div>
  );
};
