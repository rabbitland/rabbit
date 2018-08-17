#include <stdlib.h>
#include <stdio.h>
#include "window_manager.h"

int main() {
  // Try to run the window manager.
  if (Run() < 0) {
    exit(-1);
  }

  return 0;
}
