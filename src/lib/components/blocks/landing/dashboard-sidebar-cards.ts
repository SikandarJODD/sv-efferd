import type { Component } from "svelte";
import { appShellBlocks } from "$lib/blocks/app-shell/all_app_shell";
import AppShellPreview from "./category-previews/app-shell-preview.svelte";

export type DashboardSidebarCardConfig = {
    slug: string;
    title: string;
    href: string;
    count: number;
    countLabel: string;
    previewComponent: Component<{ title: string; countLabel: string }>;
};

function formatBlockLabel(count: number) {
    return `${count} ${count === 1 ? "block" : "blocks"}`;
}

export const dashboardSidebarCards: DashboardSidebarCardConfig[] = [
    {
        slug: "app-shell",
        title: "App Shell",
        href: "/blocks/app-shell",
        count: appShellBlocks.length,
        countLabel: formatBlockLabel(appShellBlocks.length),
        previewComponent: AppShellPreview
    },
];
