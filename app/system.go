package app

import (
	"os"
	"runtime"
	"strings"
)

func (a *App) GetSystemLanguage() string {
	switch runtime.GOOS {
	case "windows":
		return getWindowsLanguage()
	case "darwin":
		return getDarwinLanguage()
	case "linux":
		return getLinuxLanguage()
	default:
		return "en"
	}
}

func getWindowsLanguage() string {
	lang := os.Getenv("LANG")
	if lang == "" {
		lang = os.Getenv("LANGUAGE")
	}
	if lang == "" {
		lang = os.Getenv("LC_ALL")
	}
	if lang == "" {
		lang = os.Getenv("LC_MESSAGES")
	}
	return parseLanguage(lang)
}

func getDarwinLanguage() string {
	lang := os.Getenv("LANG")
	if lang == "" {
		lang = os.Getenv("LANGUAGE")
	}
	if lang == "" {
		lang = os.Getenv("LC_ALL")
	}
	return parseLanguage(lang)
}

func getLinuxLanguage() string {
	lang := os.Getenv("LANG")
	if lang == "" {
		lang = os.Getenv("LANGUAGE")
	}
	if lang == "" {
		lang = os.Getenv("LC_ALL")
	}
	return parseLanguage(lang)
}

func parseLanguage(lang string) string {
	if lang == "" {
		return "en"
	}

	// 处理类似 "zh_CN.UTF-8" 或 "en_US.UTF-8" 的格式
	parts := strings.Split(lang, ".")
	if len(parts) > 0 {
		lang = parts[0]
	}

	// 处理类似 "zh_CN" 或 "en_US" 的格式
	parts = strings.Split(lang, "_")
	if len(parts) > 0 {
		lang = strings.ToLower(parts[0])
	}

	// 映射语言代码
	switch lang {
	case "zh":
		return "zh"
	case "en":
		return "en"
	default:
		return "en"
	}
}
