// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: neKnaqAFQgtkJjtbXthdKd
// Component: BA2F0F7GwETKN
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
import sty from "./PlasmicAbout.module.css"; // plasmic-import: BA2F0F7GwETKN/css

export type PlasmicAbout__VariantMembers = {};

export type PlasmicAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbout__VariantsArgs;
export const PlasmicAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicAbout__ArgsType = {};
type ArgPropType = keyof PlasmicAbout__ArgsType;
export const PlasmicAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicAbout__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  reveal?: p.Flex<typeof Reveal>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultAboutProps {
  className?: string;
}

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs;
  args: PlasmicAbout__ArgsType;
  overrides: PlasmicAbout__OverridesType;

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
            <div className={classNames(projectcss.all, sty.freeBox__phaE8)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__unmp)}>
                  <Reveal
                    data-plasmic-name={"reveal"}
                    data-plasmic-override={overrides.reveal}
                    className={classNames("__wab_instance", sty.reveal)}
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
                        sty.text__hWwsd
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
                                sty.link__n0Jy6
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
                                sty.link__qr91A
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
                                sty.link__cMeAk
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
                                sty.link__zZyoN
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

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__e1Dwn
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "Film Streaming has been the last successor of DVD and BluRay. Since then, true ownership has not been offered to people who enjoy watching films. This time is over now thanks to blockchain technology.\n\nJungle Fever offers to its users the power to purchase NFT’s which gives them full ownership AND streaming access to their films. Users can grow a collection or resell their film anytime they want.\n\nEach film has a limited number of copies. Users will be able to access their NFT film on any device, any screen, any phone, any laptop + in the JungleFever upcoming Metaverse.\n\nAs its first film, Jungle Fever releases in NFT Music Hole, the provocative comedy coproduced by Rockstone Films and Luc Besson.\n\nJungle Fever is a revolutionary platform bridging a marketplace and a video player powered through the blockchain to own and stream films.\n\nIn the wild world of content, Jungle Fever will give you the NFT Fever in the most sustainable way for the planet to watch content!"
                  : "Film Streaming has been the last successor of DVD and BluRay. Since then, true ownership has not been offered to people who enjoy watching films. This time is over now thanks to blockchain technology.\n\nJungle Fever offers to its users the power to purchase NFT’s which gives them full ownership AND streaming access to their films. Users can grow a collection or resell their film anytime they want.\n\nEach film has a limited number of copies. Users will be able to access their NFT film on any device, any screen, any phone, any laptop + in the JungleFever upcoming Metaverse.\n\nAs its first film, Jungle Fever releases in NFT Music Hole, the provocative comedy coproduced by Rockstone Films and Luc Besson.\n\nJungle Fever is a revolutionary platform bridging a marketplace and a video player powered through the blockchain to own and stream films.\n\nIn the wild world of content, Jungle Fever will give you the NFT Fever in the most sustainable way for the planet to watch content!"}
              </div>
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
  root: ["root", "header", "reveal", "footer"],
  header: ["header"],
  reveal: ["reveal"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  reveal: typeof Reveal;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbout__VariantsArgs;
    args?: PlasmicAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAbout__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAbout__ArgProps,
          internalVariantPropNames: PlasmicAbout__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    reveal: makeNodeComponent("reveal"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Jungle Fever - About",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
