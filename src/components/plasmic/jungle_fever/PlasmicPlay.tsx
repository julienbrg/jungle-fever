// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: neKnaqAFQgtkJjtbXthdKd
// Component: GEPIXA075Fn-g
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
import Button from "../../Button"; // plasmic-import: TmMHvKz8624iV/component

import { useScreenVariants as useScreenVariantsw2FpJ6DWBvL } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: W2fpJ_6d-WBvL/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_jungle_fever.module.css"; // plasmic-import: neKnaqAFQgtkJjtbXthdKd/projectcss
import sty from "./PlasmicPlay.module.css"; // plasmic-import: GEPIXA075Fn-g/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: QIFkDJ_ce_gClo/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wIv3yetKUg72by/icon

export type PlasmicPlay__VariantMembers = {};

export type PlasmicPlay__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlay__VariantsArgs;
export const PlasmicPlay__VariantProps = new Array<VariantPropType>();

export type PlasmicPlay__ArgsType = {};
type ArgPropType = keyof PlasmicPlay__ArgsType;
export const PlasmicPlay__ArgProps = new Array<ArgPropType>();

export type PlasmicPlay__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  freeBox?: p.Flex<"div">;
  section?: p.Flex<"section">;
  videoBox?: p.Flex<"div">;
  verify?: p.Flex<typeof Button>;
};

export interface DefaultPlayProps {
  className?: string;
}

function PlasmicPlay__RenderFunc(props: {
  variants: PlasmicPlay__VariantsArgs;
  args: PlasmicPlay__ArgsType;
  overrides: PlasmicPlay__OverridesType;

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
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <p.Stack
                as={"section"}
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                hasGap={true}
                className={classNames(projectcss.all, sty.section)}
              >
                <div
                  data-plasmic-name={"videoBox"}
                  data-plasmic-override={overrides.videoBox}
                  className={classNames(projectcss.all, sty.videoBox)}
                />
              </p.Stack>

              {true ? (
                <Button
                  data-plasmic-name={"verify"}
                  data-plasmic-override={overrides.verify}
                  className={classNames("__wab_instance", sty.verify)}
                >
                  {"Verify NFT ownership"}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "freeBox", "section", "videoBox", "verify"],
  header: ["header"],
  freeBox: ["freeBox", "section", "videoBox", "verify"],
  section: ["section", "videoBox"],
  videoBox: ["videoBox"],
  verify: ["verify"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  freeBox: "div";
  section: "section";
  videoBox: "div";
  verify: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlay__VariantsArgs;
    args?: PlasmicPlay__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlay__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPlay__ArgProps,
          internalVariantPropNames: PlasmicPlay__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlay";
  } else {
    func.displayName = `PlasmicPlay.${nodeName}`;
  }
  return func;
}

export const PlasmicPlay = Object.assign(
  // Top-level PlasmicPlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    section: makeNodeComponent("section"),
    videoBox: makeNodeComponent("videoBox"),
    verify: makeNodeComponent("verify"),

    // Metadata about props expected for PlasmicPlay
    internalVariantProps: PlasmicPlay__VariantProps,
    internalArgProps: PlasmicPlay__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Music Hole",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPlay;
/* prettier-ignore-end */
