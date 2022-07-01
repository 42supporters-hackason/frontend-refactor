import { Box, Button, SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { HTMLAttributes } from "react";
import { Card } from "../Card";
import format from "date-fns/format";

interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * githubId
   */
  githubId?: string;
  /**
   * タイトル
   */
  title?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 使用言語
   */
  language?: string;
  /**
   * 実施日時
   */
  date?: Date;
  /**
   * ボタンの有無
   */
  hasButton?: boolean;
  /**
   * 合意の場合のテキスト
   */
  agreeTitle?: string;
  /**
   * 合意の場合のアクション
   */
  onAgree?: () => void;
  /**
   * 閉じるアクション
   */
  onClose?: () => void;
  sx?: SxProps<Theme>;
}

/**
 * ユーザ情報を表示するカード
 */
export const ProfileCard = ({
  githubId = "taisei-13046",
  title,
  content,
  language,
  date,
  hasButton = false,
  agreeTitle,
  onAgree,
  onClose,
  ...props
}: Props) => {
  return (
    <Box {...props}>
      <Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Typography variant="h5">{githubId}</Typography>
          <Typography variant="h6">Status</Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Box
              component="img"
              sx={{ height: "150px" }}
              src={`https://github-readme-stats.vercel.app/api?username=${githubId}&theme=onedark&show_icons=true)](https://github.com/anuraghazra/github-readme-stats`}
            />
            <Box
              component="img"
              sx={{ height: "150px" }}
              src={`https://raw.githubusercontent.com/${githubId}/${githubId}/main/profile-summary-card-output/default/1-repos-per-language.svg`}
            />
            <Box
              component="img"
              sx={{ height: "150px" }}
              src={`https://raw.githubusercontent.com/${githubId}/${githubId}/main/profile-summary-card-output/default/3-stats.svg`}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">募集タイトル</Typography>
            <Typography>{title}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">募集詳細</Typography>
            <Typography>{content}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">使用言語</Typography>
            <Typography>{language}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">日時</Typography>
            <Typography>{date && format(date, "yyyy/MM/dd")}</Typography>
          </Box>
          {hasButton && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <Button
                sx={{
                  mt: "15px",
                  width: "450px",
                  height: "50px",
                  borderRadius: "10px",
                }}
                variant="contained"
                onClick={onAgree}
              >
                {agreeTitle}
              </Button>
              <Button
                sx={{
                  mb: "35px",
                  mt: "auto",
                  width: "450px",
                  height: "50px",
                  borderRadius: "10px",
                }}
                variant="contained"
                type="button"
                color="secondary"
                onClick={onClose}
              >
                閉じる
              </Button>
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  );
};
