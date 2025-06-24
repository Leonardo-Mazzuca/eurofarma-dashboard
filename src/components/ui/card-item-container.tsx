import React from "react";
import { Card, CardContent, CardHeader, type CardProps } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  title?: React.ReactNode ;
  children: React.ReactNode;
  className?: string;
  contentClasses?: string;
} & Omit<CardProps, "title">

const CardItemContainer = ({
  children,
  title,
  contentClasses,
  variant = "shadow",
  ...rest
}: Props) => {
  return (
    <Card {...rest} className="dark:bg-zinc-800" variant={variant}>
      <CardHeader>
        <h2 className="text-xl font-semibold">{title}</h2>
      </CardHeader>
      <CardContent className={cn("flex items-center gap-3", contentClasses)}>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardItemContainer;
