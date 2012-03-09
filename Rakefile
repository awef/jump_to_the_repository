task :default => [
  "bin/icon_16x16.png",
  "bin/icon_19x19.png",
  "bin/icon_48x48.png",
  "bin/icon_128x128.png"
]

rule ".png" => "%{_\\d+x\\d+,}n.svg" do |t|
  /_(\d+)x(\d+)\.png$/ =~ t.name
  sh "convert\
    -background transparent\
    -resize #{$1}x#{$2}\
    #{t.prerequisites[0]} #{t.name}"
end
