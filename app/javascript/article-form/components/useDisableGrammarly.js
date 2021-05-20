export function useDisableGrammarly() {
  // 🚑 Detect if user is using chromium to disable grammarly
  const isChrome = !!window.chrome;

  return {
    disabledGrammarlyProps: isChrome
      ? { 'data-gramm_editor': 'false' }
      : undefined,
  };
}
