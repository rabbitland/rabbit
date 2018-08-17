cmake_minimum_required(VERSION 3.9)

project (rabbit)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/dist)

############################################################
# X11
############################################################
find_package (X11)

############################################################
# Pthread
############################################################
find_package (Threads)

############################################################
# Create an executable
############################################################
add_executable(rabbit
  wm/main.c
)

target_link_libraries(rabbit
  X11
  Threads::Threads
)
