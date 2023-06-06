# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := node_sleep
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=node_sleep' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D__STDC_FORMAT_MACROS' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++17

INCS_Debug := \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/include/node \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/src \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/openssl/config \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/openssl/openssl/include \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/uv/include \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/zlib \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/v8/include \
	-I$(srcdir)/../nan

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=node_sleep' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D__STDC_FORMAT_MACROS' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-O3 \
	-fno-omit-frame-pointer

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++17

INCS_Release := \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/include/node \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/src \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/openssl/config \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/openssl/openssl/include \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/uv/include \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/zlib \
	-I/home/fakhriyusuf765/.cache/node-gyp/18.12.1/deps/v8/include \
	-I$(srcdir)/../nan

OBJS := \
	$(obj).target/$(TARGET)/module_init.o \
	$(obj).target/$(TARGET)/sleep_cpp11.o \
	$(obj).target/$(TARGET)/sleep_posix.o \
	$(obj).target/$(TARGET)/sleep_win.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic \
	-m64

LDFLAGS_Release := \
	-pthread \
	-rdynamic \
	-m64

LIBS :=

$(obj).target/node_sleep.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/node_sleep.node: LIBS := $(LIBS)
$(obj).target/node_sleep.node: TOOLSET := $(TOOLSET)
$(obj).target/node_sleep.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/node_sleep.node
# Add target alias
.PHONY: node_sleep
node_sleep: $(builddir)/node_sleep.node

# Copy this to the executable output path.
$(builddir)/node_sleep.node: TOOLSET := $(TOOLSET)
$(builddir)/node_sleep.node: $(obj).target/node_sleep.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/node_sleep.node
# Short alias for building this executable.
.PHONY: node_sleep.node
node_sleep.node: $(obj).target/node_sleep.node $(builddir)/node_sleep.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/node_sleep.node
