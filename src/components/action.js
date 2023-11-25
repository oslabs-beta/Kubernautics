//https://promlabs.com/blog/2020/12/17/promql-queries-for-exploring-your-metrics/
//Promlab offers a type of semantic based meaning behind the metrics but this information is not directly accessible via PromQL
//took some of the actions from the api but condensed it down, skipping over any prometheus metrics

const actions = {
  data: {
    cadvisor_version_info: [
      {
        type: 'gauge',
        help: "A metric with a constant '1' value labeled by kernel version, OS version, docker version, cadvisor version \u0026 cadvisor revision.",
        unit: '',
      },
    ],
    container_scrape_error: [
      {
        type: 'gauge',
        help: '1 if there was an error while getting container metrics, 0 otherwise',
        unit: '',
      },
    ],
    container_cpu_usage_seconds_total: [
      {
        type: 'counter',
        help: 'Cumulative cpu time consumed in seconds.',
        unit: '',
      },
    ],
    container_cpu_cfs_periods_total: [
      {
        type: 'counter',
        help: 'Number of elapsed enforcement period intervals.',
        unit: '',
      },
    ],
    container_fs_reads_bytes_total: [
      { type: 'counter', help: 'Cumulative count of bytes read' },
    ],
    container_fs_reads_total: [
      { type: 'counter', help: 'Cumulative count of reads completed' },
    ],
    container_fs_writes_bytes_total: [
      { type: 'counter', help: 'Cumulative count of bytes written' },
    ],
    container_fs_writes_total: [
      { type: 'counter', help: 'Cumulative count of writes completed' },
    ],
    container_last_seen: [
      { type: 'gauge', help: 'Last time a container was seen by the exporter' },
    ],
    container_memory_cache: [
      { type: 'gauge', help: 'Number of bytes of page cache memory' },
    ],
    container_memory_failcnt: [
      { type: 'gauge', help: 'Number of memory usage hit limits' },
    ],
    container_memory_failures_total: [
      { type: 'gauge', help: 'Cumulative count of memory allocation failures' },
    ],
    container_memory_max_usage_bytes: [
      { type: 'gauge', help: 'Maximum memory usage usage recorded in bytes' },
    ],
    container_memory_rss: [{ type: 'gauge', help: 'Size of RSS in bytes' }],
    container_memory_usage_bytes: [
      {
        type: 'gauge',
        help: 'Current memory usage in bytes, including all memory regardless of when it was accessed',
      },
    ],
    container_memory_working_set_bytes: [
      { type: 'gauge', help: 'Current working set in bytes' },
    ],

    go_gc_duration_seconds: [
      {
        type: 'summary',
        help: 'A summary of the pause duration of garbage collection cycles.',
        unit: '',
      },
      {
        type: 'summary',
        help: 'A summary of the GC invocation durations.',
        unit: '',
      },
    ],
    go_goroutines: [
      {
        type: 'gauge',
        help: 'Number of goroutines that currently exist.',
        unit: '',
      },
    ],
    go_info: [
      {
        type: 'gauge',
        help: 'Information about the Go environment.',
        unit: '',
      },
    ],
    go_memstats_alloc_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes allocated and still in use.',
        unit: '',
      },
    ],
    go_memstats_alloc_bytes_total: [
      {
        type: 'counter',
        help: 'Total number of bytes allocated, even if freed.',
        unit: '',
      },
    ],
    go_memstats_buck_hash_sys_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes used by the profiling bucket hash table.',
        unit: '',
      },
    ],
    go_memstats_frees_total: [
      { type: 'counter', help: 'Total number of frees.', unit: '' },
    ],
    go_memstats_gc_cpu_fraction: [
      {
        type: 'gauge',
        help: "The fraction of this program's available CPU time used by the GC since the program started.",
        unit: '',
      },
    ],
    go_memstats_gc_sys_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes used for garbage collection system metadata.',
        unit: '',
      },
    ],
    go_memstats_heap_alloc_bytes: [
      {
        type: 'gauge',
        help: 'Number of heap bytes allocated and still in use.',
        unit: '',
      },
    ],
    go_memstats_heap_idle_bytes: [
      {
        type: 'gauge',
        help: 'Number of heap bytes waiting to be used.',
        unit: '',
      },
    ],
    go_memstats_heap_inuse_bytes: [
      {
        type: 'gauge',
        help: 'Number of heap bytes that are in use.',
        unit: '',
      },
    ],
    go_memstats_heap_objects: [
      { type: 'gauge', help: 'Number of allocated objects.', unit: '' },
    ],
    go_memstats_heap_released_bytes: [
      { type: 'gauge', help: 'Number of heap bytes released to OS.', unit: '' },
    ],
    go_memstats_heap_sys_bytes: [
      {
        type: 'gauge',
        help: 'Number of heap bytes obtained from system.',
        unit: '',
      },
    ],
    go_memstats_last_gc_time_seconds: [
      {
        type: 'gauge',
        help: 'Number of seconds since 1970 of last garbage collection.',
        unit: '',
      },
    ],
    go_memstats_lookups_total: [
      { type: 'counter', help: 'Total number of pointer lookups.', unit: '' },
    ],
    go_memstats_mallocs_total: [
      { type: 'counter', help: 'Total number of mallocs.', unit: '' },
    ],
    go_memstats_mcache_inuse_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes in use by mcache structures.',
        unit: '',
      },
    ],
    go_memstats_mcache_sys_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes used for mcache structures obtained from system.',
        unit: '',
      },
    ],
    go_memstats_mspan_inuse_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes in use by mspan structures.',
        unit: '',
      },
    ],
    go_memstats_mspan_sys_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes used for mspan structures obtained from system.',
        unit: '',
      },
    ],
    go_memstats_next_gc_bytes: [
      {
        type: 'gauge',
        help: 'Number of heap bytes when next garbage collection will take place.',
        unit: '',
      },
    ],
    go_memstats_other_sys_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes used for other system allocations.',
        unit: '',
      },
    ],
    go_memstats_stack_inuse_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes in use by the stack allocator.',
        unit: '',
      },
    ],
    go_memstats_stack_sys_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes obtained from system for stack allocator.',
        unit: '',
      },
    ],
    go_memstats_sys_bytes: [
      {
        type: 'gauge',
        help: 'Number of bytes obtained from system.',
        unit: '',
      },
    ],
    go_threads: [
      { type: 'gauge', help: 'Number of OS threads created.', unit: '' },
    ],
    machine_cpu_cores: [
      { type: 'gauge', help: 'Number of CPU cores on the machine.', unit: '' },
    ],
    machine_memory_bytes: [
      {
        type: 'gauge',
        help: 'Amount of memory installed on the machine.',
        unit: '',
      },
    ],
    net_conntrack_dialer_conn_attempted_total: [
      {
        type: 'counter',
        help: 'Total number of connections attempted by the given dialer a given name.',
        unit: '',
      },
    ],
    net_conntrack_dialer_conn_closed_total: [
      {
        type: 'counter',
        help: 'Total number of connections closed which originated from the dialer of a given name.',
        unit: '',
      },
    ],
    net_conntrack_dialer_conn_established_total: [
      {
        type: 'counter',
        help: 'Total number of connections successfully established by the given dialer a given name.',
        unit: '',
      },
    ],
    net_conntrack_dialer_conn_failed_total: [
      {
        type: 'counter',
        help: 'Total number of connections failed to dial by the dialer a given name.',
        unit: '',
      },
    ],
    net_conntrack_listener_conn_accepted_total: [
      {
        type: 'counter',
        help: 'Total number of connections opened to the listener of a given name.',
        unit: '',
      },
    ],
    net_conntrack_listener_conn_closed_total: [
      {
        type: 'counter',
        help: 'Total number of connections closed that were made to the listener of a given name.',
        unit: '',
      },
    ],
    node_arp_entries: [
      { type: 'gauge', help: 'ARP entries by device', unit: '' },
    ],
    node_boot_time_seconds: [
      { type: 'gauge', help: 'Node boot time, in unixtime.', unit: '' },
    ],
    node_context_switches_total: [
      { type: 'counter', help: 'Total number of context switches.', unit: '' },
    ],
    node_cooling_device_cur_state: [
      {
        type: 'gauge',
        help: 'Current throttle state of the cooling device',
        unit: '',
      },
    ],
    node_cooling_device_max_state: [
      {
        type: 'gauge',
        help: 'Maximum throttle state of the cooling device',
        unit: '',
      },
    ],
    node_cpu_guest_seconds_total: [
      {
        type: 'counter',
        help: 'Seconds the CPUs spent in guests (VMs) for each mode.',
        unit: '',
      },
    ],
    node_cpu_seconds_total: [
      {
        type: 'counter',
        help: 'Seconds the CPUs spent in each mode.',
        unit: '',
      },
    ],
    node_disk_discard_time_seconds_total: [
      {
        type: 'counter',
        help: 'This is the total number of seconds spent by all discards.',
        unit: '',
      },
    ],
    node_disk_discarded_sectors_total: [
      {
        type: 'counter',
        help: 'The total number of sectors discarded successfully.',
        unit: '',
      },
    ],
    node_disk_discards_completed_total: [
      {
        type: 'counter',
        help: 'The total number of discards completed successfully.',
        unit: '',
      },
    ],
    node_disk_discards_merged_total: [
      {
        type: 'counter',
        help: 'The total number of discards merged.',
        unit: '',
      },
    ],
    node_disk_flush_requests_time_seconds_total: [
      {
        type: 'counter',
        help: 'This is the total number of seconds spent by all flush requests.',
        unit: '',
      },
    ],
    node_disk_flush_requests_total: [
      {
        type: 'counter',
        help: 'The total number of flush requests completed successfully',
        unit: '',
      },
    ],
    node_disk_info: [
      {
        type: 'gauge',
        help: 'Info of /sys/block/\u003cblock_device\u003e.',
        unit: '',
      },
    ],
    node_disk_io_now: [
      {
        type: 'gauge',
        help: 'The number of I/Os currently in progress.',
        unit: '',
      },
    ],
    node_disk_io_time_seconds_total: [
      { type: 'counter', help: 'Total seconds spent doing I/Os.', unit: '' },
    ],
    node_disk_io_time_weighted_seconds_total: [
      {
        type: 'counter',
        help: 'The weighted # of seconds spent doing I/Os.',
        unit: '',
      },
    ],
    node_disk_read_bytes_total: [
      {
        type: 'counter',
        help: 'The total number of bytes read successfully.',
        unit: '',
      },
    ],
    node_disk_read_time_seconds_total: [
      {
        type: 'counter',
        help: 'The total number of seconds spent by all reads.',
        unit: '',
      },
    ],
    node_disk_reads_completed_total: [
      {
        type: 'counter',
        help: 'The total number of reads completed successfully.',
        unit: '',
      },
    ],
    node_disk_reads_merged_total: [
      { type: 'counter', help: 'The total number of reads merged.', unit: '' },
    ],
    node_disk_write_time_seconds_total: [
      {
        type: 'counter',
        help: 'This is the total number of seconds spent by all writes.',
        unit: '',
      },
    ],
    node_disk_writes_completed_total: [
      {
        type: 'counter',
        help: 'The total number of writes completed successfully.',
        unit: '',
      },
    ],
    node_disk_writes_merged_total: [
      { type: 'counter', help: 'The number of writes merged.', unit: '' },
    ],
    node_disk_written_bytes_total: [
      {
        type: 'counter',
        help: 'The total number of bytes written successfully.',
        unit: '',
      },
    ],
    node_dmi_info: [
      {
        type: 'gauge',
        help: "A metric with a constant '1' value labeled by bios_date, bios_release, bios_vendor, bios_version, board_asset_tag, board_name, board_serial, board_vendor, board_version, chassis_asset_tag, chassis_serial, chassis_vendor, chassis_version, product_family, product_name, product_serial, product_sku, product_uuid, product_version, system_vendor if provided by DMI.",
        unit: '',
      },
    ],
    node_entropy_available_bits: [
      { type: 'gauge', help: 'Bits of available entropy.', unit: '' },
    ],
    node_entropy_pool_size_bits: [
      { type: 'gauge', help: 'Bits of entropy pool.', unit: '' },
    ],
    node_exporter_build_info: [
      {
        type: 'gauge',
        help: "A metric with a constant '1' value labeled by version, revision, branch, goversion from which node_exporter was built, and the goos and goarch for the build.",
        unit: '',
      },
    ],
    node_filefd_allocated: [
      {
        type: 'gauge',
        help: 'File descriptor statistics: allocated.',
        unit: '',
      },
    ],
    node_filefd_maximum: [
      { type: 'gauge', help: 'File descriptor statistics: maximum.', unit: '' },
    ],
    node_filesystem_avail_bytes: [
      {
        type: 'gauge',
        help: 'Filesystem space available to non-root users in bytes.',
        unit: '',
      },
    ],
    node_filesystem_device_error: [
      {
        type: 'gauge',
        help: 'Whether an error occurred while getting statistics for the given device.',
        unit: '',
      },
    ],
    node_filesystem_files: [
      { type: 'gauge', help: 'Filesystem total file nodes.', unit: '' },
    ],
    node_filesystem_files_free: [
      { type: 'gauge', help: 'Filesystem total free file nodes.', unit: '' },
    ],
    node_filesystem_free_bytes: [
      { type: 'gauge', help: 'Filesystem free space in bytes.', unit: '' },
    ],
    node_filesystem_readonly: [
      { type: 'gauge', help: 'Filesystem read-only status.', unit: '' },
    ],
    node_filesystem_size_bytes: [
      { type: 'gauge', help: 'Filesystem size in bytes.', unit: '' },
    ],
    node_forks_total: [
      { type: 'counter', help: 'Total number of forks.', unit: '' },
    ],
    node_intr_total: [
      {
        type: 'counter',
        help: 'Total number of interrupts serviced.',
        unit: '',
      },
    ],
    node_load1: [{ type: 'gauge', help: '1m load average.', unit: '' }],
    node_load15: [{ type: 'gauge', help: '15m load average.', unit: '' }],
    node_load5: [{ type: 'gauge', help: '5m load average.', unit: '' }],
    node_memory_Active_anon_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Active_anon_bytes.',
        unit: '',
      },
    ],
    node_memory_Active_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Active_bytes.',
        unit: '',
      },
    ],
    node_memory_Active_file_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Active_file_bytes.',
        unit: '',
      },
    ],
    node_memory_AnonHugePages_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field AnonHugePages_bytes.',
        unit: '',
      },
    ],
    node_memory_AnonPages_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field AnonPages_bytes.',
        unit: '',
      },
    ],
    node_memory_Bounce_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Bounce_bytes.',
        unit: '',
      },
    ],
    node_memory_Buffers_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Buffers_bytes.',
        unit: '',
      },
    ],
    node_memory_Cached_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Cached_bytes.',
        unit: '',
      },
    ],
    node_memory_CommitLimit_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field CommitLimit_bytes.',
        unit: '',
      },
    ],
    node_memory_Committed_AS_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Committed_AS_bytes.',
        unit: '',
      },
    ],
    node_memory_DirectMap2M_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field DirectMap2M_bytes.',
        unit: '',
      },
    ],
    node_memory_DirectMap4k_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field DirectMap4k_bytes.',
        unit: '',
      },
    ],
    node_memory_Dirty_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Dirty_bytes.',
        unit: '',
      },
    ],
    node_memory_FileHugePages_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field FileHugePages_bytes.',
        unit: '',
      },
    ],
    node_memory_FilePmdMapped_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field FilePmdMapped_bytes.',
        unit: '',
      },
    ],
    node_memory_HardwareCorrupted_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field HardwareCorrupted_bytes.',
        unit: '',
      },
    ],
    node_memory_HugePages_Free: [
      {
        type: 'gauge',
        help: 'Memory information field HugePages_Free.',
        unit: '',
      },
    ],
    node_memory_HugePages_Rsvd: [
      {
        type: 'gauge',
        help: 'Memory information field HugePages_Rsvd.',
        unit: '',
      },
    ],
    node_memory_HugePages_Surp: [
      {
        type: 'gauge',
        help: 'Memory information field HugePages_Surp.',
        unit: '',
      },
    ],
    node_memory_HugePages_Total: [
      {
        type: 'gauge',
        help: 'Memory information field HugePages_Total.',
        unit: '',
      },
    ],
    node_memory_Hugepagesize_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Hugepagesize_bytes.',
        unit: '',
      },
    ],
    node_memory_Hugetlb_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Hugetlb_bytes.',
        unit: '',
      },
    ],
    node_memory_Inactive_anon_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Inactive_anon_bytes.',
        unit: '',
      },
    ],
    node_memory_Inactive_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Inactive_bytes.',
        unit: '',
      },
    ],
    node_memory_Inactive_file_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Inactive_file_bytes.',
        unit: '',
      },
    ],
    node_memory_KReclaimable_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field KReclaimable_bytes.',
        unit: '',
      },
    ],
    node_memory_KernelStack_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field KernelStack_bytes.',
        unit: '',
      },
    ],
    node_memory_Mapped_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Mapped_bytes.',
        unit: '',
      },
    ],
    node_memory_MemAvailable_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field MemAvailable_bytes.',
        unit: '',
      },
    ],
    node_memory_MemFree_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field MemFree_bytes.',
        unit: '',
      },
    ],
    node_memory_MemTotal_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field MemTotal_bytes.',
        unit: '',
      },
    ],
    node_memory_Mlocked_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Mlocked_bytes.',
        unit: '',
      },
    ],
    node_memory_NFS_Unstable_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field NFS_Unstable_bytes.',
        unit: '',
      },
    ],
    node_memory_PageTables_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field PageTables_bytes.',
        unit: '',
      },
    ],
    node_memory_Percpu_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Percpu_bytes.',
        unit: '',
      },
    ],
    node_memory_SReclaimable_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field SReclaimable_bytes.',
        unit: '',
      },
    ],
    node_memory_SUnreclaim_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field SUnreclaim_bytes.',
        unit: '',
      },
    ],
    node_memory_ShmemHugePages_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field ShmemHugePages_bytes.',
        unit: '',
      },
    ],
    node_memory_ShmemPmdMapped_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field ShmemPmdMapped_bytes.',
        unit: '',
      },
    ],
    node_memory_Shmem_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Shmem_bytes.',
        unit: '',
      },
    ],
    node_memory_Slab_bytes: [
      { type: 'gauge', help: 'Memory information field Slab_bytes.', unit: '' },
    ],
    node_memory_SwapCached_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field SwapCached_bytes.',
        unit: '',
      },
    ],
    node_memory_SwapFree_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field SwapFree_bytes.',
        unit: '',
      },
    ],
    node_memory_SwapTotal_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field SwapTotal_bytes.',
        unit: '',
      },
    ],
    node_memory_Unevictable_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Unevictable_bytes.',
        unit: '',
      },
    ],
    node_memory_VmallocChunk_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field VmallocChunk_bytes.',
        unit: '',
      },
    ],
    node_memory_VmallocTotal_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field VmallocTotal_bytes.',
        unit: '',
      },
    ],
    node_memory_VmallocUsed_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field VmallocUsed_bytes.',
        unit: '',
      },
    ],
    node_memory_WritebackTmp_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field WritebackTmp_bytes.',
        unit: '',
      },
    ],
    node_memory_Writeback_bytes: [
      {
        type: 'gauge',
        help: 'Memory information field Writeback_bytes.',
        unit: '',
      },
    ],
    node_netstat_Icmp6_InErrors: [
      { type: 'unknown', help: 'Statistic Icmp6InErrors.', unit: '' },
    ],
    node_netstat_Icmp6_InMsgs: [
      { type: 'unknown', help: 'Statistic Icmp6InMsgs.', unit: '' },
    ],
    node_netstat_Icmp6_OutMsgs: [
      { type: 'unknown', help: 'Statistic Icmp6OutMsgs.', unit: '' },
    ],
    node_netstat_Icmp_InErrors: [
      { type: 'unknown', help: 'Statistic IcmpInErrors.', unit: '' },
    ],
    node_netstat_Icmp_InMsgs: [
      { type: 'unknown', help: 'Statistic IcmpInMsgs.', unit: '' },
    ],
    node_netstat_Icmp_OutMsgs: [
      { type: 'unknown', help: 'Statistic IcmpOutMsgs.', unit: '' },
    ],
    node_netstat_Ip6_InOctets: [
      { type: 'unknown', help: 'Statistic Ip6InOctets.', unit: '' },
    ],
    node_netstat_Ip6_OutOctets: [
      { type: 'unknown', help: 'Statistic Ip6OutOctets.', unit: '' },
    ],
    node_netstat_IpExt_InOctets: [
      { type: 'unknown', help: 'Statistic IpExtInOctets.', unit: '' },
    ],
    node_netstat_IpExt_OutOctets: [
      { type: 'unknown', help: 'Statistic IpExtOutOctets.', unit: '' },
    ],
    node_netstat_Ip_Forwarding: [
      { type: 'unknown', help: 'Statistic IpForwarding.', unit: '' },
    ],
    node_netstat_TcpExt_ListenDrops: [
      { type: 'unknown', help: 'Statistic TcpExtListenDrops.', unit: '' },
    ],
    node_netstat_TcpExt_ListenOverflows: [
      { type: 'unknown', help: 'Statistic TcpExtListenOverflows.', unit: '' },
    ],
    node_netstat_TcpExt_SyncookiesFailed: [
      { type: 'unknown', help: 'Statistic TcpExtSyncookiesFailed.', unit: '' },
    ],
    node_netstat_TcpExt_SyncookiesRecv: [
      { type: 'unknown', help: 'Statistic TcpExtSyncookiesRecv.', unit: '' },
    ],
    node_netstat_TcpExt_SyncookiesSent: [
      { type: 'unknown', help: 'Statistic TcpExtSyncookiesSent.', unit: '' },
    ],
    node_netstat_TcpExt_TCPSynRetrans: [
      { type: 'unknown', help: 'Statistic TcpExtTCPSynRetrans.', unit: '' },
    ],
    node_netstat_TcpExt_TCPTimeouts: [
      { type: 'unknown', help: 'Statistic TcpExtTCPTimeouts.', unit: '' },
    ],
    node_netstat_Tcp_ActiveOpens: [
      { type: 'unknown', help: 'Statistic TcpActiveOpens.', unit: '' },
    ],
    node_netstat_Tcp_CurrEstab: [
      { type: 'unknown', help: 'Statistic TcpCurrEstab.', unit: '' },
    ],
    node_netstat_Tcp_InErrs: [
      { type: 'unknown', help: 'Statistic TcpInErrs.', unit: '' },
    ],
    node_netstat_Tcp_InSegs: [
      { type: 'unknown', help: 'Statistic TcpInSegs.', unit: '' },
    ],
    node_netstat_Tcp_OutRsts: [
      { type: 'unknown', help: 'Statistic TcpOutRsts.', unit: '' },
    ],
    node_netstat_Tcp_OutSegs: [
      { type: 'unknown', help: 'Statistic TcpOutSegs.', unit: '' },
    ],
    node_netstat_Tcp_PassiveOpens: [
      { type: 'unknown', help: 'Statistic TcpPassiveOpens.', unit: '' },
    ],
    node_netstat_Tcp_RetransSegs: [
      { type: 'unknown', help: 'Statistic TcpRetransSegs.', unit: '' },
    ],
    node_netstat_Udp6_InDatagrams: [
      { type: 'unknown', help: 'Statistic Udp6InDatagrams.', unit: '' },
    ],
    node_netstat_Udp6_InErrors: [
      { type: 'unknown', help: 'Statistic Udp6InErrors.', unit: '' },
    ],
    node_netstat_Udp6_NoPorts: [
      { type: 'unknown', help: 'Statistic Udp6NoPorts.', unit: '' },
    ],
    node_netstat_Udp6_OutDatagrams: [
      { type: 'unknown', help: 'Statistic Udp6OutDatagrams.', unit: '' },
    ],
    node_netstat_Udp6_RcvbufErrors: [
      { type: 'unknown', help: 'Statistic Udp6RcvbufErrors.', unit: '' },
    ],
    node_netstat_Udp6_SndbufErrors: [
      { type: 'unknown', help: 'Statistic Udp6SndbufErrors.', unit: '' },
    ],
    node_netstat_UdpLite6_InErrors: [
      { type: 'unknown', help: 'Statistic UdpLite6InErrors.', unit: '' },
    ],
    node_netstat_UdpLite_InErrors: [
      { type: 'unknown', help: 'Statistic UdpLiteInErrors.', unit: '' },
    ],
    node_netstat_Udp_InDatagrams: [
      { type: 'unknown', help: 'Statistic UdpInDatagrams.', unit: '' },
    ],
    node_netstat_Udp_InErrors: [
      { type: 'unknown', help: 'Statistic UdpInErrors.', unit: '' },
    ],
    node_netstat_Udp_NoPorts: [
      { type: 'unknown', help: 'Statistic UdpNoPorts.', unit: '' },
    ],
    node_netstat_Udp_OutDatagrams: [
      { type: 'unknown', help: 'Statistic UdpOutDatagrams.', unit: '' },
    ],
    node_netstat_Udp_RcvbufErrors: [
      { type: 'unknown', help: 'Statistic UdpRcvbufErrors.', unit: '' },
    ],
    node_netstat_Udp_SndbufErrors: [
      { type: 'unknown', help: 'Statistic UdpSndbufErrors.', unit: '' },
    ],
    node_network_address_assign_type: [
      {
        type: 'gauge',
        help: 'Network device property: address_assign_type',
        unit: '',
      },
    ],
    node_network_carrier: [
      { type: 'gauge', help: 'Network device property: carrier', unit: '' },
    ],
    node_network_carrier_changes_total: [
      {
        type: 'counter',
        help: 'Network device property: carrier_changes_total',
        unit: '',
      },
    ],
    node_network_carrier_down_changes_total: [
      {
        type: 'counter',
        help: 'Network device property: carrier_down_changes_total',
        unit: '',
      },
    ],
    node_network_carrier_up_changes_total: [
      {
        type: 'counter',
        help: 'Network device property: carrier_up_changes_total',
        unit: '',
      },
    ],
    node_network_device_id: [
      { type: 'gauge', help: 'Network device property: device_id', unit: '' },
    ],
    node_network_dormant: [
      { type: 'gauge', help: 'Network device property: dormant', unit: '' },
    ],
    node_network_flags: [
      { type: 'gauge', help: 'Network device property: flags', unit: '' },
    ],
    node_network_iface_id: [
      { type: 'gauge', help: 'Network device property: iface_id', unit: '' },
    ],
    node_network_iface_link: [
      { type: 'gauge', help: 'Network device property: iface_link', unit: '' },
    ],
    node_network_iface_link_mode: [
      {
        type: 'gauge',
        help: 'Network device property: iface_link_mode',
        unit: '',
      },
    ],
    node_network_info: [
      {
        type: 'gauge',
        help: 'Non-numeric data from /sys/class/net/\u003ciface\u003e, value is always 1.',
        unit: '',
      },
    ],
    node_network_mtu_bytes: [
      { type: 'gauge', help: 'Network device property: mtu_bytes', unit: '' },
    ],
    node_network_name_assign_type: [
      {
        type: 'gauge',
        help: 'Network device property: name_assign_type',
        unit: '',
      },
    ],
    node_network_net_dev_group: [
      {
        type: 'gauge',
        help: 'Network device property: net_dev_group',
        unit: '',
      },
    ],
    node_network_protocol_type: [
      {
        type: 'gauge',
        help: 'Network device property: protocol_type',
        unit: '',
      },
    ],
    node_network_receive_bytes_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_bytes.',
        unit: '',
      },
    ],
    node_network_receive_compressed_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_compressed.',
        unit: '',
      },
    ],
    node_network_receive_drop_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_drop.',
        unit: '',
      },
    ],
    node_network_receive_errs_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_errs.',
        unit: '',
      },
    ],
    node_network_receive_fifo_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_fifo.',
        unit: '',
      },
    ],
    node_network_receive_frame_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_frame.',
        unit: '',
      },
    ],
    node_network_receive_multicast_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_multicast.',
        unit: '',
      },
    ],
    node_network_receive_nohandler_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_nohandler.',
        unit: '',
      },
    ],
    node_network_receive_packets_total: [
      {
        type: 'counter',
        help: 'Network device statistic receive_packets.',
        unit: '',
      },
    ],
    node_network_speed_bytes: [
      { type: 'gauge', 
      help: 'Network device property: speed_bytes', 
      unit: '' },
    ],
    node_network_transmit_bytes_total: [
      {
        type: 'counter',
        help: 'Network device statistic transmit_bytes.',
        unit: '',
      },
    ],
    node_network_transmit_carrier_total: [
      {
        type: 'counter',
        help: 'Network device statistic transmit_carrier.',
        unit: '',
      },
    ],
    node_network_transmit_colls_total: [
      {
        type: 'counter',
        help: 'Network device statistic transmit_colls.',
        unit: '',
      },
    ],
    node_network_transmit_compressed_total: [
      {
        type: 'counter',
        help: 'Network device statistic transmit_compressed.',
        unit: '',
      },
    ],
    node_network_transmit_drop_total: [
      {
        type: 'counter',
        help: 'Network device statistic transmit_drop.',
        unit: '',
      },
    ],
    node_network_transmit_errs_total: [
      {
        type: 'counter',
        help: 'Network device statistic transmit_errs.',
        unit: '',
      },
    ],
    node_network_transmit_fifo_total: [
      {
        type: 'counter',
        help: 'Network device statistic transmit_fifo.',
        unit: '',
      },
    ],
    node_network_transmit_packets_total: [
      {
        type: 'counter',
        help: 'Network device statistic transmit_packets.',
        unit: '',
      },
    ],
    node_network_transmit_queue_length: [
      {
        type: 'gauge',
        help: 'Network device property: transmit_queue_length',
        unit: '',
      },
    ],
    node_network_up: [
      {
        type: 'gauge',
        help: "Value is 1 if operstate is 'up', 0 otherwise.",
        unit: '',
      },
    ],
    node_nf_conntrack_entries: [
      {
        type: 'gauge',
        help: 'Number of currently allocated flow entries for connection tracking.',
        unit: '',
      },
    ],
    node_nf_conntrack_entries_limit: [
      {
        type: 'gauge',
        help: 'Maximum size of connection tracking table.',
        unit: '',
      },
    ],
    node_os_info: [
      {
        type: 'gauge',
        help: "A metric with a constant '1' value labeled by build_id, id, id_like, image_id, image_version, name, pretty_name, variant, variant_id, version, version_codename, version_id.",
        unit: '',
      },
    ],
    node_os_version: [
      {
        type: 'gauge',
        help: 'Metric containing the major.minor part of the OS version.',
        unit: '',
      },
    ],
    node_pressure_cpu_waiting_seconds_total: [
      {
        type: 'counter',
        help: 'Total time in seconds that processes have waited for CPU time',
        unit: '',
      },
    ],
    node_pressure_io_stalled_seconds_total: [
      {
        type: 'counter',
        help: 'Total time in seconds no process could make progress due to IO congestion',
        unit: '',
      },
    ],
    node_pressure_io_waiting_seconds_total: [
      {
        type: 'counter',
        help: 'Total time in seconds that processes have waited due to IO congestion',
        unit: '',
      },
    ],
    node_pressure_memory_stalled_seconds_total: [
      {
        type: 'counter',
        help: 'Total time in seconds no process could make progress due to memory congestion',
        unit: '',
      },
    ],
    node_pressure_memory_waiting_seconds_total: [
      {
        type: 'counter',
        help: 'Total time in seconds that processes have waited for memory',
        unit: '',
      },
    ],
    node_procs_blocked: [
      {
        type: 'gauge',
        help: 'Number of processes blocked waiting for I/O to complete.',
        unit: '',
      },
    ],
    node_procs_running: [
      {
        type: 'gauge',
        help: 'Number of processes in runnable state.',
        unit: '',
      },
    ],
    node_schedstat_running_seconds_total: [
      {
        type: 'counter',
        help: 'Number of seconds CPU spent running a process.',
        unit: '',
      },
    ],
    node_schedstat_timeslices_total: [
      {
        type: 'counter',
        help: 'Number of timeslices executed by CPU.',
        unit: '',
      },
    ],
    node_schedstat_waiting_seconds_total: [
      {
        type: 'counter',
        help: 'Number of seconds spent by processing waiting for this CPU.',
        unit: '',
      },
    ],
    node_scrape_collector_duration_seconds: [
      {
        type: 'gauge',
        help: 'node_exporter: Duration of a collector scrape.',
        unit: '',
      },
    ],
    node_scrape_collector_success: [
      {
        type: 'gauge',
        help: 'node_exporter: Whether a collector succeeded.',
        unit: '',
      },
    ],
    node_selinux_enabled: [
      {
        type: 'gauge',
        help: 'SELinux is enabled, 1 is true, 0 is false',
        unit: '',
      },
    ],
    node_sockstat_FRAG6_inuse: [
      {
        type: 'gauge',
        help: 'Number of FRAG6 sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_FRAG6_memory: [
      {
        type: 'gauge',
        help: 'Number of FRAG6 sockets in state memory.',
        unit: '',
      },
    ],
    node_sockstat_FRAG_inuse: [
      {
        type: 'gauge',
        help: 'Number of FRAG sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_FRAG_memory: [
      {
        type: 'gauge',
        help: 'Number of FRAG sockets in state memory.',
        unit: '',
      },
    ],
    node_sockstat_RAW6_inuse: [
      {
        type: 'gauge',
        help: 'Number of RAW6 sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_RAW_inuse: [
      {
        type: 'gauge',
        help: 'Number of RAW sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_TCP6_inuse: [
      {
        type: 'gauge',
        help: 'Number of TCP6 sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_TCP_alloc: [
      {
        type: 'gauge',
        help: 'Number of TCP sockets in state alloc.',
        unit: '',
      },
    ],
    node_sockstat_TCP_inuse: [
      {
        type: 'gauge',
        help: 'Number of TCP sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_TCP_mem: [
      { type: 'gauge', help: 'Number of TCP sockets in state mem.', unit: '' },
    ],
    node_sockstat_TCP_mem_bytes: [
      {
        type: 'gauge',
        help: 'Number of TCP sockets in state mem_bytes.',
        unit: '',
      },
    ],
    node_sockstat_TCP_orphan: [
      {
        type: 'gauge',
        help: 'Number of TCP sockets in state orphan.',
        unit: '',
      },
    ],
    node_sockstat_TCP_tw: [
      { type: 'gauge', help: 'Number of TCP sockets in state tw.', unit: '' },
    ],
    node_sockstat_UDP6_inuse: [
      {
        type: 'gauge',
        help: 'Number of UDP6 sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_UDPLITE6_inuse: [
      {
        type: 'gauge',
        help: 'Number of UDPLITE6 sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_UDPLITE_inuse: [
      {
        type: 'gauge',
        help: 'Number of UDPLITE sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_UDP_inuse: [
      {
        type: 'gauge',
        help: 'Number of UDP sockets in state inuse.',
        unit: '',
      },
    ],
    node_sockstat_UDP_mem: [
      { type: 'gauge', help: 'Number of UDP sockets in state mem.', unit: '' },
    ],
    node_sockstat_UDP_mem_bytes: [
      {
        type: 'gauge',
        help: 'Number of UDP sockets in state mem_bytes.',
        unit: '',
      },
    ],
    node_sockstat_sockets_used: [
      { type: 'gauge', 
      help: 'Number of IPv4 sockets in use.', 
      unit: '' },
    ],
    node_softnet_backlog_len: [
      { type: 'gauge', 
      help: 'Softnet backlog status', 
      unit: '' },
    ],
    node_softnet_cpu_collision_total: [
      {
        type: 'counter',
        help: 'Number of collision occur while obtaining device lock while transmitting',
        unit: '',
      },
    ],
    node_softnet_dropped_total: [
      { type: 'counter', help: 'Number of dropped packets', unit: '' },
    ],
    node_softnet_flow_limit_count_total: [
      {
        type: 'counter',
        help: 'Number of times flow limit has been reached',
        unit: '',
      },
    ],
    node_softnet_processed_total: [
      { type: 'counter', 
      help: 'Number of processed packets', 
      unit: '' },
    ],
    node_softnet_received_rps_total: [
      {
        type: 'counter',
        help: 'Number of times cpu woken up received_rps',
        unit: '',
      },
    ],
    node_softnet_times_squeezed_total: [
      {
        type: 'counter',
        help: 'Number of times processing packets ran out of quota',
        unit: '',
      },
    ],
    node_textfile_scrape_error: [
      {
        type: 'gauge',
        help: '1 if there was an error opening or reading a file, 0 otherwise',
        unit: '',
      },
    ],
    node_time_clocksource_available_info: [
      {
        type: 'gauge',
        help: "Available clocksources read from '/sys/devices/system/clocksource'.",
        unit: '',
      },
    ],
    node_time_clocksource_current_info: [
      {
        type: 'gauge',
        help: "Current clocksource read from '/sys/devices/system/clocksource'.",
        unit: '',
      },
    ],
    node_time_seconds: [
      {
        type: 'gauge',
        help: 'System time in seconds since epoch (1970).',
        unit: '',
      },
    ],
    node_time_zone_offset_seconds: [
      { type: 'gauge', help: 'System time zone offset in seconds.', unit: '' },
    ],
    node_timex_estimated_error_seconds: [
      { type: 'gauge', help: 'Estimated error in seconds.', unit: '' },
    ],
    node_timex_frequency_adjustment_ratio: [
      { type: 'gauge', help: 'Local clock frequency adjustment.', unit: '' },
    ],
    node_timex_loop_time_constant: [
      { type: 'gauge', help: 'Phase-locked loop time constant.', unit: '' },
    ],
    node_timex_maxerror_seconds: [
      { type: 'gauge', help: 'Maximum error in seconds.', unit: '' },
    ],
    node_timex_offset_seconds: [
      {
        type: 'gauge',
        help: 'Time offset in between local system and reference clock.',
        unit: '',
      },
    ],
    node_timex_pps_calibration_total: [
      {
        type: 'counter',
        help: 'Pulse per second count of calibration intervals.',
        unit: '',
      },
    ],
    node_timex_pps_error_total: [
      {
        type: 'counter',
        help: 'Pulse per second count of calibration errors.',
        unit: '',
      },
    ],
    node_timex_pps_frequency_hertz: [
      { type: 'gauge', help: 'Pulse per second frequency.', unit: '' },
    ],
    node_timex_pps_jitter_seconds: [
      { type: 'gauge', help: 'Pulse per second jitter.', unit: '' },
    ],
    node_timex_pps_jitter_total: [
      {
        type: 'counter',
        help: 'Pulse per second count of jitter limit exceeded events.',
        unit: '',
      },
    ],
    node_timex_pps_shift_seconds: [
      { type: 'gauge', help: 'Pulse per second interval duration.', unit: '' },
    ],
    node_timex_pps_stability_exceeded_total: [
      {
        type: 'counter',
        help: 'Pulse per second count of stability limit exceeded events.',
        unit: '',
      },
    ],
    node_timex_pps_stability_hertz: [
      {
        type: 'gauge',
        help: 'Pulse per second stability, average of recent frequency changes.',
        unit: '',
      },
    ],
    node_timex_status: [
      { type: 'gauge', help: 'Value of the status array bits.', unit: '' },
    ],
    node_timex_sync_status: [
      {
        type: 'gauge',
        help: 'Is clock synchronized to a reliable server (1 = yes, 0 = no).',
        unit: '',
      },
    ],
    node_timex_tai_offset_seconds: [
      {
        type: 'gauge',
        help: 'International Atomic Time (TAI) offset.',
        unit: '',
      },
    ],
    node_timex_tick_seconds: [
      { type: 'gauge', help: 'Seconds between clock ticks.', unit: '' },
    ],
    node_udp_queues: [
      {
        type: 'gauge',
        help: 'Number of allocated memory in the kernel for UDP datagrams in bytes.',
        unit: '',
      },
    ],
    node_uname_info: [
      {
        type: 'gauge',
        help: 'Labeled system information as provided by the uname system call.',
        unit: '',
      },
    ],
    node_vmstat_oom_kill: [
      {
        type: 'unknown',
        help: '/proc/vmstat information field oom_kill.',
        unit: '',
      },
    ],
    node_vmstat_pgfault: [
      {
        type: 'unknown',
        help: '/proc/vmstat information field pgfault.',
        unit: '',
      },
    ],
    node_vmstat_pgmajfault: [
      {
        type: 'unknown',
        help: '/proc/vmstat information field pgmajfault.',
        unit: '',
      },
    ],
    node_vmstat_pgpgin: [
      {
        type: 'unknown',
        help: '/proc/vmstat information field pgpgin.',
        unit: '',
      },
    ],
    node_vmstat_pgpgout: [
      {
        type: 'unknown',
        help: '/proc/vmstat information field pgpgout.',
        unit: '',
      },
    ],
    node_vmstat_pswpin: [
      {
        type: 'unknown',
        help: '/proc/vmstat information field pswpin.',
        unit: '',
      },
    ],
    node_vmstat_pswpout: [
      {
        type: 'unknown',
        help: '/proc/vmstat information field pswpout.',
        unit: '',
      },
    ],
    process_cpu_seconds_total: [
      {
        type: 'counter',
        help: 'Total user and system CPU time spent in seconds.',
        unit: '',
      },
    ],
    process_max_fds: [
      {
        type: 'gauge',
        help: 'Maximum number of open file descriptors.',
        unit: '',
      },
    ],
    process_open_fds: [
      { type: 'gauge', help: 'Number of open file descriptors.', unit: '' },
    ],
    process_resident_memory_bytes: [
      { type: 'gauge', help: 'Resident memory size in bytes.', unit: '' },
    ],
  },
};

export default actions;
