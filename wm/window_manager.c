#include <X11/Xlib.h>
#include <stdio.h>

static int wm_detected = 0;

int OnWMDetected(Display* display, XErrorEvent* e);

int Run() {
  Display* display = XOpenDisplay(NULL);

  if (display == NULL) {
    printf("Failed to open X display %s.\n", XDisplayName(NULL));
    return -1;
  }

  const Window root = DefaultRootWindow(display);

  // Fail when there is already another window manager.
  {
    XSetErrorHandler(&OnWMDetected);

    XSelectInput(
        display,
        root,
        SubstructureRedirectMask | SubstructureNotifyMask);

    XSync(display, 1);

    if (wm_detected)  {
      printf("Detected another window manager on display %s.\n", XDisplayString(display));
      return -1;
    }
  }

  return 0;
}

int OnWMDetected(Display* display, XErrorEvent* e) { 
  if (e->error_code == BadAccess) {
    wm_detected = 1;
  }
  return 0;
}
