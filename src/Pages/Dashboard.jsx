/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Dashboard.css';

const mockClassData = {
    totalStudents: 124,
    averageEngagement: 72.5,
    classPerformance: [
      { month: 'Jan', engagement: 65, participation: 68 },
      { month: 'Feb', engagement: 72, participation: 75 },
      { month: 'Mar', engagement: 78, participation: 80 },
      { month: 'Apr', engagement: 75, participation: 72 },
      { month: 'May', engagement: 80, participation: 85 }
    ],
    topPerformers: [
      { 
        name: 'Emma Johnson', 
        engagement: 92, 
        subjects: ['Mathematics', 'Physics'],
        avatar: 'https://randomuser.me/api/portraits/women/67.jpg'
      },
      { 
        name: 'Alex Chen', 
        engagement: 88, 
        subjects: ['Computer Science', 'Biology'],
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      { 
        name: 'Sophia Rodriguez', 
        engagement: 85, 
        subjects: ['Literature', 'History'],
        avatar: 'https://randomuser.me/api/portraits/women/50.jpg'
      }
    ],
    classInsights: [
      { 
        title: 'Overall Engagement', 
        value: '72.5%', 
        trend: 'up',
        icon: '📊'
      },
      { 
        title: 'Active Participation', 
        value: '75%', 
        trend: 'up',
        icon: '🏆'
      },
      { 
        title: 'Learning Hours', 
        value: '24.5 hrs/week', 
        trend: 'stable',
        icon: '⏱️'
      }
    ]
  };
  
  const TeacherDashboard = () => {
    const [selectedView, setSelectedView] = useState('overview');
  
    const renderOverviewSection = () => (
      <div className="dashboard-grid">
        {/* Performance Insights Column */}
        <div className="card performance-insights">
          <div className="card-header">
            <h2>Class Performance Insights</h2>
          </div>
          <div className="card-content">
            <div className="performance-chart">
              <div className="chart-header">
                <h3>Engagement & Participation Trends</h3>
                <span className="chart-period">Last 5 Months</span>
              </div>
              <div className="engagement-chart">
                {mockClassData.classPerformance.map((item, index) => (
                  <div key={item.month} className="chart-column">
                    <div 
                      className="engagement-bar" 
                      style={{ 
                        height: `${item.engagement}%`, 
                        backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                      }}
                    />
                    <div 
                      className="participation-bar"
                      style={{ 
                        height: `${item.participation}%`, 
                        backgroundColor: `hsl(${index * 60 + 30}, 70%, 50%)`
                      }}
                    />
                    <span className="month-label">{item.month}</span>
                  </div>
                ))}
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color engagement-color"></div>
                  <span>Engagement</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color participation-color"></div>
                  <span>Participation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Class Insights Column */}
        <div className="card class-insights">
          <div className="card-header">
            <h2>Class Overview</h2>
          </div>
          <div className="card-content">
            <div className="insights-grid">
              {mockClassData.classInsights.map(insight => (
                <div key={insight.title} className="insight-card">
                  <div className="insight-icon">{insight.icon}</div>
                  <div className="insight-details">
                    <h4>{insight.title}</h4>
                    <div className="insight-value">
                      <span>{insight.value}</span>
                      <span className={`trend ${insight.trend}`}>
                        {insight.trend === 'up' ? '▲' : insight.trend === 'down' ? '▼' : '—'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="top-performers">
              <h3>Top Performing Students</h3>
              {mockClassData.topPerformers.map(student => (
                <div key={student.name} className="performer-card">
                  <img 
                    src={student.avatar} 
                    alt={student.name} 
                    className="performer-avatar" 
                  />
                  <div className="performer-details">
                    <h4>{student.name}</h4>
                    <p>Subjects: {student.subjects.join(', ')}</p>
                    <div className="engagement-score">
                      <span>Engagement: {student.engagement}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  
    const renderUploadSection = () => (
        <div className="dashboard-grid upload-section">
          <div className="card video-upload">
            <div className="card-header">
              <h2>Upload Classroom Video</h2>
            </div>
            <div className="card-content">
              <div className="upload-dropzone">
                <input 
                  type="file" 
                  accept="video/*" 
                  className="file-input"
                />
                <div className="upload-icon">📽️</div>
                <p>Drag and drop or click to upload classroom video</p>
                <small>Supported formats: MP4, AVI | Max Size: 2GB</small>
              </div>
    
              <div className="upload-details">
                <h3>Upload Guidelines</h3>
                <ul>
                  <li>Ensure clear, well-lit classroom footage</li>
                  <li>Capture full classroom view</li>
                  <li>Minimum resolution: 720p</li>
                  <li>Maximum video length: 60 minutes</li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="card upload-history">
            <div className="card-header">
              <h2>Upload History</h2>
            </div>
            <div className="card-content">
              <div className="history-list">
                <div className="history-item">
                  <div className="file-info">
                    <span className="file-name">Math_Class_9A.mp4</span>
                    <span className="file-date">March 15, 2024</span>
                  </div>
                  <div className="file-status completed">Processed</div>
                </div>
                <div className="history-item">
                  <div className="file-info">
                    <span className="file-name">Science_Lecture.mp4</span>
                    <span className="file-date">March 14, 2024</span>
                  </div>
                  <div className="file-status processing">Processing</div>
                </div>
                <div className="history-item">
                  <div className="file-info">
                    <span className="file-name">English_Seminar.mp4</span>
                    <span className="file-date">March 13, 2024</span>
                  </div>
                  <div className="file-status error">Error</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
      const renderInsightsSection = () => (
        <div className="dashboard-grid insights-section">
          <div className="card student-engagement">
            <div className="card-header">
              <h2>Student Engagement Metrics</h2>
            </div>
            <div className="card-content">
              <div className="engagement-summary">
                <div className="metric-card">
                  <div className="metric-icon">📊</div>
                  <div className="metric-details">
                    <h3>Average Engagement</h3>
                    <p>72.5%</p>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">🕒</div>
                  <div className="metric-details">
                    <h3>Active Learning Time</h3>
                    <p>24.5 hrs/week</p>
                  </div>
                </div>
              </div>
              <div className="engagement-breakdown">
                <h3>Engagement by Subject</h3>
                <div className="subject-list">
                  <div className="subject-item">
                    <span>Mathematics</span>
                    <div className="progress-bar">
                      <div className="progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="subject-item">
                    <span>Science</span>
                    <div className="progress-bar">
                      <div className="progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="subject-item">
                    <span>Literature</span>
                    <div className="progress-bar">
                      <div className="progress" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="card detailed-insights">
            <div className="card-header">
              <h2>Detailed Class Analysis</h2>
            </div>
            <div className="card-content">
              <div className="insights-grid">
                <div className="insight-block">
                  <h3>Top Performers</h3>
                  <ul>
                    <li>Emma Johnson (92%)</li>
                    <li>Alex Chen (88%)</li>
                    <li>Sophia Rodriguez (85%)</li>
                  </ul>
                </div>
                <div className="insight-block">
                  <h3>Low Engagement Areas</h3>
                  <ul>
                    <li>First 15 minutes of class</li>
                    <li>Complex topic introductions</li>
                    <li>Late afternoon sessions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
      return (
        <div className="teacher-dashboard">
          <header className="dashboard-header">
            <h1>Teacher Analytics Dashboard</h1>
            <div className="view-selector">
              <button 
                className={selectedView === 'overview' ? 'active' : ''}
                onClick={() => setSelectedView('overview')}
              >
                Overview
              </button>
              <button 
                className={selectedView === 'upload' ? 'active' : ''}
                onClick={() => setSelectedView('upload')}
              >
                Upload
              </button>
              <button 
                className={selectedView === 'insights' ? 'active' : ''}
                onClick={() => setSelectedView('insights')}
              >
                Insights
              </button>
            </div>
          </header>
    
          <div className="dashboard-content">
            {selectedView === 'overview' && renderOverviewSection()}
            {selectedView === 'upload' && renderUploadSection()}
            {selectedView === 'insights' && renderInsightsSection()}
          </div>
        </div>
      );
    };
  
  
  
  export default TeacherDashboard;