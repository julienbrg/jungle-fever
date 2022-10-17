// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: neKnaqAFQgtkJjtbXthdKd
// Component: ObYxGyTLMBD9Z
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: -5kvBjMJU6nse/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import Footer from "../../Footer"; // plasmic-import: LYimf7BcZyc4G/component

import { useScreenVariants as useScreenVariantsw2FpJ6DWBvL } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: W2fpJ_6d-WBvL/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_jungle_fever.module.css"; // plasmic-import: neKnaqAFQgtkJjtbXthdKd/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: ObYxGyTLMBD9Z/css

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsw2FpJ6DWBvL()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__rmw1Q)}>
              <p.Stack
                as={"section"}
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                hasGap={true}
                className={classNames(projectcss.all, sty.section)}
              >
                <Reveal
                  big={true}
                  className={classNames("__wab_instance", sty.reveal___39KnM)}
                  direction={"down" as const}
                  duration={5000 as const}
                  effect={"fade" as const}
                  triggerOnce={true}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Jungle Fever"}
                  </h1>
                </Reveal>
              </p.Stack>

              {true ? (
                <Reveal
                  big={true}
                  className={classNames("__wab_instance", sty.reveal__kOnjS)}
                  delay={6000 as const}
                  duration={3000 as const}
                  effect={"fade" as const}
                  triggerOnce={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aUcBt
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile") ? (
                      "Sit back, \nrelax, \nand watch the show."
                    ) : (
                      <React.Fragment>
                        <React.Fragment>
                          {"Sit back, relax, and "}
                        </React.Fragment>
                        {
                          <a
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              projectcss.plasmic_default__inline,
                              sty.link__njmHg
                            )}
                            href={`/play`}
                          >
                            {"watch the show"}
                          </a>
                        }
                        <React.Fragment>{"."}</React.Fragment>
                      </React.Fragment>
                    )}
                  </div>
                </Reveal>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox___5Ud8)}>
                  <Reveal
                    className={classNames("__wab_instance", sty.reveal__jrpJy)}
                    delay={6000 as const}
                    direction={"vertical" as const}
                    duration={1500 as const}
                    effect={"fade" as const}
                    triggerOnce={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lXmJs
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile") ? (
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          {
                            <a
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                projectcss.__wab_text,
                                projectcss.plasmic_default__inline,
                                sty.link__ag7I
                              )}
                              href={
                                "https://foundation.app/collection/mholefnc" as const
                              }
                              target={"_blank" as const}
                            >
                              {hasVariant(globalVariants, "screen", "mobile")
                                ? "Foundation"
                                : "Foundation"}
                            </a>
                          }
                          <React.Fragment>{"\n"}</React.Fragment>
                          {
                            <a
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                projectcss.__wab_text,
                                projectcss.plasmic_default__inline,
                                sty.link__cSIt
                              )}
                              href={
                                "https://opensea.io/collection/music-hole-ai-jungle-fever-fnc" as const
                              }
                              target={"_blank" as const}
                            >
                              {hasVariant(globalVariants, "screen", "mobile")
                                ? "OpenSea"
                                : "OpenSea"}
                            </a>
                          }
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          {
                            <a
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                projectcss.__wab_text,
                                projectcss.plasmic_default__inline,
                                sty.link__ag7I
                              )}
                              href={
                                "https://foundation.app/collection/mholefnc" as const
                              }
                              target={"_blank" as const}
                            >
                              {hasVariant(globalVariants, "screen", "mobile")
                                ? "Foundation"
                                : "Foundation"}
                            </a>
                          }
                          <React.Fragment>{" | "}</React.Fragment>
                          {
                            <a
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                projectcss.__wab_text,
                                projectcss.plasmic_default__inline,
                                sty.link__cSIt
                              )}
                              href={
                                "https://opensea.io/collection/music-hole-ai-jungle-fever-fnc" as const
                              }
                              target={"_blank" as const}
                            >
                              {hasVariant(globalVariants, "screen", "mobile")
                                ? "OpenSea"
                                : "OpenSea"}
                            </a>
                          }
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      )}
                    </div>
                  </Reveal>
                </div>
              ) : null}
            </div>
          ) : null}

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "h1", "footer"],
  header: ["header"],
  section: ["section", "h1"],
  h1: ["h1"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: "section";
  h1: "h1";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Building Web3 since 2013.",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/4a3f4516bad734748f72a69f6ae35d66.png",
      canonical: "https://strat.cc"
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
