// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: neKnaqAFQgtkJjtbXthdKd
// Component: -5kvBjMJU6nse
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
import Button from "../../Button"; // plasmic-import: TmMHvKz8624iV/component

import { useScreenVariants as useScreenVariantsw2FpJ6DWBvL } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: W2fpJ_6d-WBvL/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_jungle_fever.module.css"; // plasmic-import: neKnaqAFQgtkJjtbXthdKd/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: -5kvBjMJU6nse/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: QIFkDJ_ce_gClo/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wIv3yetKUg72by/icon

export type PlasmicHeader__VariantMembers = {};

export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  userAddressBox?: p.Flex<"a">;
  userAddressBox2?: p.Flex<"a">;
  login?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
};

export interface DefaultHeaderProps {
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__yAb7J)}
      >
        <a
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__gWm6G
          )}
          href={`/`}
        >
          {"Jungle Fever"}
        </a>

        <a
          data-plasmic-name={"userAddressBox"}
          data-plasmic-override={overrides.userAddressBox}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.userAddressBox
          )}
          href={"" as const}
          target={"_blank" as const}
        >
          {"0x093D...6f36"}
        </a>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__y3Zwc)}
      >
        {false ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hjd5X)}
          >
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__krLAb
              )}
              href={`/`}
            >
              {"Jungle Fever"}
            </a>

            <a
              data-plasmic-name={"userAddressBox2"}
              data-plasmic-override={overrides.userAddressBox2}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.userAddressBox2
              )}
              href={"" as const}
              target={"_blank" as const}
            >
              {"0x093D...6f36"}
            </a>
          </p.Stack>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__jf90P)}>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__pkXan
              )}
              href={
                hasVariant(globalVariants, "screen", "mobile")
                  ? `/films`
                  : `/films`
              }
            >
              {"Library"}
            </a>
          </div>
        ) : null}

        <a
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__r47Tv
          )}
          href={`/about`}
        >
          {"About"}
        </a>

        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__tohkz)}>
            <Button
              data-plasmic-name={"login"}
              data-plasmic-override={overrides.login}
              className={classNames("__wab_instance", sty.login)}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"Login"}
              </div>
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "userAddressBox", "userAddressBox2", "login", "text"],
  userAddressBox: ["userAddressBox"],
  userAddressBox2: ["userAddressBox2"],
  login: ["login", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  userAddressBox: "a";
  userAddressBox2: "a";
  login: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    userAddressBox: makeNodeComponent("userAddressBox"),
    userAddressBox2: makeNodeComponent("userAddressBox2"),
    login: makeNodeComponent("login"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
