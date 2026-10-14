import React, { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Flame, Trophy, Calendar } from "lucide-react";
import { HandwrittenNote } from "../notebook/HandwrittenNote";
import { DoodleArrow } from "../notebook/DoodleDrawn";
import { WashiTape } from "../notebook/WashiTape";
import {
  LeetCodeIcon,
  CodeChefIcon,
  CodeforcesIcon,
  CodolioIcon,
} from "../ui/Icons";
import { useDsaStats } from "../../hooks/useDsaStats";
import "./DsaSection.css";

gsap.registerPlugin(useGSAP);

interface DsaTopic {
  name: string;
  count: number;
  colorClass: string;
}

const DSA_TOPICS: DsaTopic[] = [
  { name: "ARRAYS", count: 182, colorClass: "sticker-yellow" },
  { name: "MATH", count: 64, colorClass: "sticker-orange" },
  { name: "HASHING", count: 57, colorClass: "sticker-blue" },
  { name: "STRINGS", count: 55, colorClass: "sticker-green" },
  { name: "DP", count: 47, colorClass: "sticker-pink" },
  { name: "SORTING", count: 46, colorClass: "sticker-purple" },
  { name: "BINARY SEARCH", count: 34, colorClass: "sticker-yellow" },
  { name: "TWO POINTERS", count: 32, colorClass: "sticker-green" },
  { name: "GREEDY", count: 31, colorClass: "sticker-blue" },
  { name: "BFS & TREES", count: 21, colorClass: "sticker-pink" },
];

interface CodingProfile {
  name: string;
  url: string;
  icon: React.ReactNode;
  badge: string;
  label: string;
}

export const DsaSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { stats, isLive } = useDsaStats();

  const codingProfiles: CodingProfile[] = useMemo(
    () => [
      {
        name: "LEETCODE",
        url: "https://leetcode.com/u/sirwagya",
        icon: <LeetCodeIcon size={16} className="dsa-profile-icon" />,
        badge: stats.leetcode.badge || `${stats.leetcode.totalSolved}+ Solved`,
        label: "Visit Sirwagya on LeetCode (@sirwagya)",
      },
      {
        name: "CODECHEF",
        url: "https://www.codechef.com/users/sirwagya",
        icon: <CodeChefIcon size={16} className="dsa-profile-icon" />,
        badge:
          stats.codechef.badge ||
          `${stats.codechef.rating} · ${stats.codechef.stars}★ Coder`,
        label: "Visit Sirwagya on CodeChef (@sirwagya)",
      },
      {
        name: "CODEFORCES",
        url: "https://codeforces.com/profile/sirwxgya",
        icon: <CodeforcesIcon size={16} className="dsa-profile-icon" />,
        badge:
          stats.codeforces.badge ||
          (stats.codeforces.rating
            ? `${stats.codeforces.rating} · ${stats.codeforces.rank}`
            : "Active Contestant"),
        label: "Visit Sirwagya on Codeforces (@sirwxgya)",
      },
      {
        name: "CODOLIO",
        url: "https://codolio.com/profile/sirwagya",
        icon: <CodolioIcon size={16} className="dsa-profile-icon" />,
        badge: stats.codolio.badge || "Verified · #8232",
        label: "Visit Sirwagya on Codolio (@sirwagya)",
      },
    ],
    [stats]
  );

  const lcTotal = stats.leetcode.totalSolved || 290;
  const easyPct = Math.max(
    Math.round((stats.leetcode.easySolved / lcTotal) * 100),
    10
  );
  const medPct = Math.max(
    Math.round((stats.leetcode.mediumSolved / lcTotal) * 100),
    10
  );
  const hardPct = Math.max(100 - easyPct - medPct, 5);

  const starCount = Math.min(Math.max(stats.codechef.stars || 3, 1), 7);
  const starString = "★".repeat(starCount);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(
          ".dsa-header-anim, .dsa-stat-card, .dsa-topic-pill, .dsa-profile-anim",
          { opacity: 1, y: 0, scale: 1 },
        );
        return;
      }

      gsap.fromTo(
        ".dsa-header-anim",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".dsa-stat-card",
        { opacity: 0, y: 18, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.1,
          ease: "back.out(1.3)",
          scrollTrigger: {
            trigger: ".dsa-stats-deck",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".dsa-topic-pill",
        { opacity: 0, scale: 0.9, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.03,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".dsa-topics-cluster",
            start: "top 86%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".dsa-profile-anim",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".dsa-profiles-row",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="dsa"
      ref={containerRef}
      className="notebook-section dsa-notebook-section"
      aria-label="DSA Journey"
    >
      <div className="dsa-editorial-wrapper">
        {/* Small Handwritten Header Label with Live Badge */}
        <div className="dsa-handwritten-label dsa-header-anim">
          <HandwrittenNote color="green" size="xl" rotate={-2}>
            dsa journey
          </HandwrittenNote>
          <DoodleArrow
            direction="right"
            color="#16a34a"
            width={36}
            height={18}
            className="dsa-arrow"
          />
          <span
            className="dsa-live-badge font-mono"
            title="Real-time ratings dynamically fetched from Codeforces, CodeChef, and LeetCode"
          >
            <span className="dsa-live-dot" /> {isLive ? "live sync" : "dynamic sync"}
          </span>
        </div>

        {/* Large Editorial Heading */}
        <h2 className="dsa-main-headline font-display dsa-header-anim">
          LEARNING TO THINK
          <br />
          IN ALGORITHMS.
        </h2>

        {/* Short Personal Narrative */}
        <p className="dsa-personal-desc font-sans dsa-header-anim">
          I practice data structures and algorithms to sharpen core engineering
          fundamentals. Beyond interview prep, it builds intuition for breaking
          down complex problems, reasoning about system constraints, and writing
          deterministic, high-efficiency code.
        </p>

        {/* Authentic Stats Deck (3 Tactile Paper Cards with Washi Tape) */}
        <div className="dsa-stats-deck">
          {/* Card 1: Problems Solved with Difficulty Split */}
          <div className="dsa-stat-card dsa-card-solved">
            <WashiTape
              color="yellow"
              top="-10px"
              left="22px"
              rotate={-2}
              width={55}
            />
            <div className="dsa-stat-top">
              <span className="dsa-stat-label font-tech">QUESTIONS SOLVED</span>
              <span className="dsa-stat-num font-display">
                {stats.totalSolved}
              </span>
            </div>

            {/* Visual Difficulty Distribution Bar */}
            <div
              className="dsa-diff-bar-track"
              aria-hidden="true"
            >
              <div
                className="diff-bar-seg seg-easy"
                style={{ width: `${easyPct}%` }}
                title={`Easy: ${stats.leetcode.easySolved}`}
              />
              <div
                className="diff-bar-seg seg-medium"
                style={{ width: `${medPct}%` }}
                title={`Medium: ${stats.leetcode.mediumSolved}`}
              />
              <div
                className="diff-bar-seg seg-hard"
                style={{ width: `${hardPct}%` }}
                title={`Hard: ${stats.leetcode.hardSolved}`}
              />
            </div>

            {/* Difficulty Pills */}
            <div className="dsa-diff-badges font-mono">
              <span className="diff-tag tag-easy">
                <span className="diff-dot dot-easy" /> {stats.leetcode.easySolved} Easy
              </span>
              <span className="diff-tag tag-medium">
                <span className="diff-dot dot-medium" /> {stats.leetcode.mediumSolved} Medium
              </span>
              <span className="diff-tag tag-hard">
                <span className="diff-dot dot-hard" /> {stats.leetcode.hardSolved} Hard
              </span>
            </div>

            {/* Handwritten Marginalia */}
            <div className="dsa-stat-annotation">
              <HandwrittenNote color="dark" size="sm" rotate={-2}>
                {stats.leetcode.mediumSolved} mediums cracked!
              </HandwrittenNote>
            </div>
          </div>

          {/* Card 2: Rating & Contest Prowess */}
          <div className="dsa-stat-card dsa-card-rating">
            <WashiTape
              color="blue"
              top="-9px"
              right="20px"
              rotate={3}
              width={52}
            />
            <div className="dsa-stat-top">
              <div className="dsa-label-row font-tech">
                <span>CODECHEF RATING</span>
                <Trophy size={14} className="dsa-stat-icon-gold" />
              </div>
              <div className="dsa-rating-flex">
                <span className="dsa-stat-num font-display">
                  {stats.codechef.rating}
                </span>
                <span className="dsa-star-tier font-tech">{starString}</span>
              </div>
            </div>

            <div className="dsa-stat-meta-box font-mono">
              <div className="meta-line">
                <span className="meta-dim">Peak:</span>
                <span className="meta-val font-bold">
                  {stats.codechef.highestRating} ({stats.codechef.stars}-Star)
                </span>
              </div>
              <div className="meta-line">
                <span className="meta-dim">Contests:</span>
                <span className="meta-val">
                  {stats.codechef.contests} Attended
                </span>
              </div>
              <div className="meta-line">
                <span className="meta-dim">Global Rank:</span>
                <span className="meta-val">
                  {stats.codechef.globalRank
                    ? `#${stats.codechef.globalRank}`
                    : "#8232 (C-Score)"}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Consistency & Active Days */}
          <div className="dsa-stat-card dsa-card-habit">
            <WashiTape
              color="pink"
              top="-10px"
              left="26px"
              rotate={-1}
              width={50}
            />
            <div className="dsa-stat-top">
              <div className="dsa-label-row font-tech">
                <span>ACTIVE DAYS</span>
                <Calendar size={14} className="dsa-stat-icon-green" />
              </div>
              <span className="dsa-stat-num font-display">179</span>
            </div>

            <div className="dsa-stat-meta-box font-mono">
              <div className="meta-line">
                <span className="meta-dim">Max Streak:</span>
                <span className="meta-val streak-badge font-bold">
                  <Flame size={12} className="streak-flame" /> 34 Days
                </span>
              </div>
              <div className="meta-line">
                <span className="meta-dim">Submissions:</span>
                <span className="meta-val">516 Total</span>
              </div>
            </div>

            {/* Mini Habit Squares Graphic */}
            <div
              className="dsa-mini-heatmap"
              aria-hidden="true"
            >
              <span className="heatmap-label font-mono">Apr — Sep</span>
              <div className="heatmap-squares">
                {[...Array(18)].map((_, i) => (
                  <span
                    key={i}
                    className={`heat-cell ${i % 3 === 0 ? "cell-high" : i % 2 === 0 ? "cell-med" : "cell-low"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider Subtitle: Topic Focus */}
        <div className="dsa-sub-header dsa-header-anim">
          <span className="font-tech sub-header-label">
            TOPIC BREAKDOWN BY PROBLEMS SOLVED
          </span>
        </div>

        {/* Simple Visual Block: Topic Labels Cluster with Exact Counts */}
        <div className="dsa-topics-cluster">
          {DSA_TOPICS.map((topic) => (
            <div
              key={topic.name}
              className={`dsa-topic-pill paper-sticker ${topic.colorClass} font-mono`}
            >
              <span className="topic-name">{topic.name}</span>
              <span className="topic-divider">·</span>
              <span className="topic-count">{topic.count}</span>
            </div>
          ))}
        </div>

        {/* Subtle Handwritten Note Annotation */}
        <div className="dsa-note-annotation dsa-header-anim">
          <HandwrittenNote color="dark" size="sm" rotate={-1}>
            consistency &gt; cramming
          </HandwrittenNote>
        </div>

        {/* Find Me Coding Label */}
        <div className="dsa-find-me-label dsa-profile-anim">
          <span className="font-tech find-me-text">FIND ME CODING</span>
          <DoodleArrow
            direction="right"
            color="#ea580c"
            width={32}
            height={16}
            className="dsa-profile-arrow"
          />
        </div>

        {/* Four Enriched Coding Profile Links */}
        <div className="dsa-profiles-row">
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dsa-profile-link paper-sticker sticker-white dsa-profile-anim font-tech"
              aria-label={profile.label}
            >
              <span className="profile-icon-wrap">{profile.icon}</span>
              <div className="profile-text-group">
                <span className="profile-platform-name">{profile.name}</span>
                <span className="profile-sub-badge font-mono">
                  {profile.badge}
                </span>
              </div>
              <ArrowUpRight size={14} className="profile-external-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
