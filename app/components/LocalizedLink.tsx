"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import type { ComponentPropsWithoutRef } from "react";

type Props = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
};

export default function LocalizedLink(props: Props) {
  const locale = useLocale();
  const { href, ...rest } = props;

  if (href.startsWith("http") || href.startsWith("#")) {
    return <Link {...rest} href={href} />;
  }

  const firstSegment = href.split("/").filter(Boolean)[0];
  if (firstSegment && firstSegment === locale) {
    return <Link {...rest} href={href} />;
  }

  const localizedHref = `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
  return <Link {...rest} href={localizedHref}>{props.children}</Link>;
}
